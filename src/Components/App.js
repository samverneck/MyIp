import React from 'react';
// Components
import MyFooter from './MyFooter';
//Services
import MyIp from './../Services/MyIp';

class App extends React.Component {
  constructor(){
      super();

      this.state = {
        message: "Seu Ip é..."
      }
  }

  handleClick() {
    const ip = MyIp.myIp().then((response) => {
      this.setState({
        message: "Seu Ip é " + response.data.ip
      })
    })
  }

  render() {
    return(
      <div className="box hero-body container has-text-centered">
        <h1 className="title">{ this.state.message }</h1>
        <button className="button is-primary is-outlined is-medium" onClick={this.handleClick.bind(this)}>Show Ip</button>
        <MyFooter />
      </div>
    );
  }
}

export default App;
