import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Layout extends Component {
	
	render() {
		return(
			<React.Fragment>
					
				<div className="header" style={{backgroundImage: `url('/images/HeaderInside.jpg')`, backgroundRepeat: "repeat-x", height:"218px", backgroundSize: "cover" }}>
					<div className="logoimg" style={{height:173, width: "637px"}}><img src="/images/LogoInside.png" style={{margin: "20px"}} /></div>	
				</div>
				<div style={{margin: "50px", minHeight: "350px"}}>					
					{this.props.children}
				</div>
				
				<div style={{backgroundColor: "#eee", textAlign: "center", fontFamily: "arial", padding: "15px", marginTop: "20px"}}>2020 © All Rights Reserved. Powered by Encore.</div>

				</React.Fragment>
		);
	}
}

export default Layout