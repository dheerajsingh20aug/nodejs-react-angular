import fs from 'fs';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import favicon from 'serve-favicon';
import bodyParser from 'body-parser';
import compression from 'compression';

import graphqlHttp from 'express-graphql';
import {buildSchema} from 'graphql';
import graphqlSchema from "./src/graphql/schema";
import graphqlResolvers from "./src/graphql/resolvers";


import routes from './src/routes/index';
import isAuth from  './src/middleware/is-auth';

const app = express();

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());

/**
 *  Allow CORS
 */

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Apply Auth middleware
app.use(isAuth);



app.use(favicon(path.join(__dirname, './public', 'favicon.ico')));


app.use(express.static(__dirname + '/public'));

// API Routes
app.use(routes);

// set the view engine to ejs
app.set('view engine', 'ejs');


// Create an express server and GraphQL end point

app.use('/graphql', graphqlHttp({
	schema: graphqlSchema,
	rootValue: graphqlResolvers,
	graphiql: true,
	customFormatErrorFn(err) {
		if(!err.originalError) {
			return err;
		}
		const data = err.originalError.data;
		const message = err.originalError.message;
		const code = err.originalError.code || 500;
		return {message:message, status:code, data:data}
	}
}));

app.listen(8200, () => {
	console.log(`Server started at http://localhost:8200`);
});

export default app;
