import {
	DASHBOARD_LIST,
	DASHBOARD_LIST_FETCHING
} from '../../actions/dashboard';


const initialState = {
	dashboard: [],
	loading: false
}

export default function contacts(state=initialState, action) {
	switch(action.type) {
		case DASHBOARD_LIST_FETCHING : 
				return Object.assign({}, state, {loading: action.payload});		
		case DASHBOARD_LIST : 
				return Object.assign({}, state, {dashboard: action.payload});		
		default:
				return state;
	}
}