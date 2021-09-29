import React, { Component } from 'react';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      couter: 0,
      name : 'Nghialm'
    }
  };
  increaseCouter = () => {
    this.setState({
      ...this.state,
      couter : this.state.couter + 1
    });
  };
  changeName = (name) => {
    this.setState({
      ...this.state,
      name,
    });
  };
  render() {
    console.log('pure render');
    return (
      <div>
        <p>Couter : { this.state.couter }</p>
        <button onClick={this.increaseCouter}>increase couter </button>
        <NameComponent
          name={this.state.name}
          changeName={this.changeName}
          /> 
      </div>
    );
  }
}

class NameComponent extends React.PureComponent {
  render() {
    console.log('name render');
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default index;