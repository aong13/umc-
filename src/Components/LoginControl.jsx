import React, { Component } from 'react';

class LoginControl extends Component {
  constructor(props) {
    super(props);

    this.state = {isLoggedIn: false};
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);  
}

handleLoginClick(){
    this.setState(prevState => ({
        isLoggedIn: true
  }));
}

handleLogoutClick(){
    this.setState(prevState => ({
        isLoggedIn: false
  }));
}

  render() {
    return (
        <div style={{paddingInline:"50px"}}>
        <button 
        onClick={this.state.isLoggedIn ? this.handleLogoutClick : this.handleLoginClick}
        style={{
            backgroundColor: 'white',
            borderRadius : '20px',
            padding:'5px',
            width: '80px'
        }}>
          {this.state.isLoggedIn ? '로그아웃' : '로그인'}
        </button>
        <span onClick={this.state.isLoggedIn ? this.handleLogoutClick : this.handleLoginClick}>
          {this.state.isLoggedIn ? '환영합니다!' : '로그인 해주세요!'}
        </span>
      </div>
    );
  }
}

export default LoginControl;
