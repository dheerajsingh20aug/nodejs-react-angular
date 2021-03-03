import {combineReducers} from 'redux';
import dashboard from './dashboard';

const rootReducers = combineReducers({
	dashboard: dashboard
});

export default rootReducers;