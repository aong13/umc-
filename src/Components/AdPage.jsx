import React, { Component } from 'react';
import Ad from './Ad'; // Ad 컴포넌트 import

class AdPage extends Component {
  constructor(props) {
    super(props);

    this.state = {showAd: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(){
    this.setState(prevState => ({
        showAd: !prevState.showAd
  }));
}

  render() {
    return (
        <div>
        <Ad warn={this.state.showAd} />
        <button onClick={this.handleToggleClick}>
          {this.state.showAd ? '광고 안 보기' : '광고 보기'}
        </button>
      </div>
    );
  }
}

export default AdPage;
