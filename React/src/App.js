import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import Dashboard from './components/dashboard';
import Login from './components/login';
import store from './store';
import './App.css'

class App extends Component {	
	render () {
		return(
			<Provider store={store} >
				<Router>
					<div>							
							<Route exact path="/" component={Login}></Route>
							<Route path="/dashboard" component={Dashboard}></Route>									
					</div>
				</Router>
			</Provider>

		)
	}
}
export default App;



