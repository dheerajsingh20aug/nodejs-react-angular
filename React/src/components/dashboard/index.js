import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';
import Layout from '../layout'
import {getDashboardData} from '../../actions/dashboard'
import './dashboard.css'

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dashboardList: [],
			left:[{key:'name', value:"abc"}, 
			{key:'name', value:"abc1"}, 
			{key:'name', value:"abc2"}, 
			{key:'name', value:"abc3"}, 
			{key:'name', value:"abc4"}],
			right:[]
		}
		this.callAPI = this.callAPI.bind(this);
	}

	rightClicked = (index) => {
		// move element from right to left
		let elemleft = Object.assign([], this.state.left);
		let elemRight = Object.assign([], this.state.right)
		let moveElem = elemRight.splice(index, 1)[0];
		elemleft.push(moveElem);

		this.setState({left:elemleft, right:elemRight});
	}
	leftClicked = (index) => {
		// move element from left to right
		let elemleft = Object.assign([], this.state.left);
		let elemRight = Object.assign([], this.state.right)
		let moveElem = elemleft.splice(index, 1)[0];
		elemRight.push(moveElem);

		this.setState({left:elemleft, right:elemRight});
		
	}
	callAPI() {
		this.props.getData();
	}

	render() {
		console.log(this.props.dashboard);
		return (
			<Layout>
				<div className="content no-margin-bottom no-padding-bottom no-padding-top">
        <h4>Child/Donor Listing</h4>
        <div className="col-md-12">
					<div className="col-md-5">
						<div className="card" >
							<div className="card-header">
								Featured
							</div>
							<div className="card-body">
								<ul>
								{this.state.left.map( (obj, index) => {
									return (<li key={`${index}-left`}> <a onClick={ (e) => this.leftClicked(index)}>{obj.value}</a></li>);
								})}
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-2"></div>
						<div className="col-md-5">
						<div className="card">
							<div className="card-header">
								Featured
							</div>
							<div className="card-body">
								<ul>
								{this.state.right.map( (obj, index) => {
									return (<li key={`${index}-left`} ><a onClick={ (e) => this.rightClicked(index)}>{obj.value}</a></li>);
								})}
								</ul>
							</div>
						</div>
					</div>

          {/* <table id="childlist" className="table datatable-basic table-bordered table-striped table-hover dataTable no-footer">
            <thead>
              <tr>
                <th>Child Name</th>
                <th>Class</th>
                <th>Age</th>
                <th>Donor Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jyoti</td>
                <td>II</td>
                <td>7yr</td>
                <td>John Carter</td>
                <td>johncarter007@outlook.com</td>
              </tr>
              <tr>
                <td>Jyoti</td>
                <td>II</td>
                <td>7yr</td>
                <td>John Carter</td>
                <td>johncarter007@outlook.com</td>
              </tr>
              <tr>
                <td>Jyoti</td>
                <td>II</td>
                <td>7yr</td>
                <td>John Carter</td>
                <td>johncarter007@outlook.com</td>
              </tr>
              <tr>
                <td>Jyoti</td>
                <td>II</td>
                <td>7yr</td>
                <td>John Carter</td>
                <td>johncarter007@outlook.com</td>
              </tr>
              <tr>
                <td>Jyoti</td>
                <td>II</td>
                <td>7yr</td>
                <td>John Carter</td>
                <td>johncarter007@outlook.com</td>
              </tr>
              <tr>
                <td>Jyoti</td>
                <td>II</td>
                <td>7yr</td>
                <td>John Carter</td>
                <td>johncarter007@outlook.com</td>
              </tr>
              <tr>
                <td>Jyoti</td>
                <td>II</td>
                <td>7yr</td>
                <td>John Carter</td>
                <td>johncarter007@outlook.com</td>
              </tr>
              <tr>
                <td>Jyoti</td>
                <td>II</td>
                <td>7yr</td>
                <td>John Carter</td>
                <td>johncarter007@outlook.com</td>
              </tr>
              <tr>
                <td>Jyoti</td>
                <td>II</td>
                <td>7yr</td>
                <td>John Carter</td>
                <td>johncarter007@outlook.com</td>
              </tr>
              <tr>
                <td>Jyoti</td>
                <td>II</td>
                <td>7yr</td>
                <td>John Carter</td>
                <td>johncarter007@outlook.com</td>
              </tr>
            </tbody>
          </table>*/}
        </div> 
        <div className="row">
          <div className="col-md-3"><a href="#"><img src="/images/btn_sendReportcard.png" style={{margin: '15px 25px', height: '28px'}} /></a></div>
          <div className="col-md-9 text-right"><a href="#"><img src="/images/btn_download.png" style={{margin: '15px 25px', height: '28px'}} /></a>&nbsp;<a href="#"><img src="/images/btn_Export.png" style={{margin: '15px 25px', height: '28px'}} /></a></div>
        </div>
      </div>
			</Layout>			
		);
	}
}

const mapStateToProps = state => {
	return {
		dashboard: state.dashboard,
	}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getData: getDashboardData
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);