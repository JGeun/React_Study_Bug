import React, { Component } from 'react';

class Footer extends Component{
  render(){
    const FooterStyle = {
      display: "flex",
      height: "50%",
      fontSize: "20px",
      fontWeight: "700",
      justifyContent: "flex-end",
      marginRight: "200px",
      alignItems: "flex-end",
    };
    return(
      <div style={FooterStyle}>
        FAQ&nbsp;&nbsp;&nbsp; Teams of Use &nbsp;&nbsp;&nbsp; Privacy Policy
      </div>
    );
  }
}

export default Footer;