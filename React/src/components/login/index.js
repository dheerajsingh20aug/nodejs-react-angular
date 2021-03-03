import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';
import './login.css'

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
		this.login = this.login.bind(this);
	}

	login(e) {
		e.preventDefault();
		// this.props.getData();
	}

	render() {
	
		return (
			<div className="page-container">
        {/* Page content */}
        <div className="page-content">
          {/* Main content */}
          <div className="content-wrapper" style={{backgroundImage: 'url("/images/shutterstock_600579596.jpg")', backgroundPosition: 'center', backgroundSize: 'cover'}}>
            {/* Content area */}
            <div className="content no-margin-bottom no-padding-bottom no-padding-top">
              <div className="row">
                <div className="col-md-5 col-xs-offset-6"><div className="loginsection">
                    {/* Simple login form */}
                    <form onSubmit={(e) =>{ this.login(e) }}>
                      <div className="pane1 panel-body" style={{backgroundColor: '#fff', opacity: '0.8', padding: '40px', borderRadius: '20px'}}>
                        <div className="text-center">
                          <div className><img src="/images/logo.png" className="img-responsive" /></div>
                        </div>
                        <br /><br />
                        <div className="form-group has-feedback has-feedback-left">
                          <input type="text" className="input-rounded input-lg form-control" placeholder="Username" style={{height: '5.5vh', borderRadius: '12px'}} />
                          <div className="form-control-feedback">
                            <i className="icon-user text-muted" />
                          </div>
                        </div>
                        <div className="form-group has-feedback has-feedback-left">
                          <input type="password" className="input-rounded input-lg form-control" placeholder="Password" style={{height: '5.5vh', borderRadius: '12px'}} />
                          <div className="form-control-feedback">
                            <i className="icon-lock2 text-muted" />
                          </div>
                        </div>
                        <br />
                        <div className="form-group has-feedback has-feedback-left">
                          <input type="checkbox" className="checkboxcustom" /> <span style={{fontSize: '16px'}}>Remember me</span>
                        </div>
                        <div className="form-group">
                          <button className="btn btn-primary btn-block" style={{height: '6vh', borderRadius: '12px', fontSize: '1.5em'}} >Sign In</button>
                        </div>
                      </div>
                    </form>
                    {/* /simple login form */}
                  </div></div>
              </div>
            </div>
            {/* /content area */}
          </div>
          {/* /main content */}
        </div>
        {/* /page content */}
      </div>
      		
		);
	}
}

// const mapStateToProps = state => {
// 	return {
// 		dashboard: state.dashboard,
// 	}
// }

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     getData: getDashboardData
//   }, dispatch);
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Login);
export default Login;