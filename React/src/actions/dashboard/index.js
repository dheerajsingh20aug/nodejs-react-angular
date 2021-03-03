export const DASHBOARD_LIST = "DASHBOARD_LIST";
export const DASHBOARD_LIST_FETCHING = "DASHBOARD_LIST_FETCHING";

const setDashboardData = (data)=> {
 return {
	 type:DASHBOARD_LIST,
	 payload: data
 }
}
const setDashboardIsFetching = (flag)=> {
	return {
		type:DASHBOARD_LIST_FETCHING,
		payload: flag
	}
 }

export function getDashboardData () {
	return async (dispatch) => {
		dispatch(setDashboardIsFetching(true));	
		return fetch("https://api.github.com/users/KrunalLathiya")
		.then( response => {
			return response.json()		
		})
		.then (data => {
			dispatch(setDashboardIsFetching(false));	
			dispatch(setDashboardData(data));	
		});
	}	
	
}