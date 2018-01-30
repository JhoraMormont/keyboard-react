import React from 'react';

/*
 * props {Object}
 * props.name {String}
 * props.value {String}
 *
 */
export default class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = { style: { color:'blue'} }
  }

  render() {
    return (
      <button name={this.props.name} type="button" style={this.state.style} >{this.props.value}</button>
    )
  }

  componentDidMount() {
    setInterval(() => {
      this.changeColor();
    }, 3000)
  }

  changeColor() {
    
    const colors = ['blue', 'red', 'green']

    this.setState ({ style: { color: colors[Math.floor(Math.random() * Math.floor(3))] } });

  }

}
