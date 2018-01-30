import React from 'react';

import Button from "../button";

export default class Keyboard extends React.Component {
  render(){
    return (
      <div>
        <Button name="a" value="A"/>
        <Button name="b" value="B"/>
        <Button name="c" value="C"/>
      </div>
    )
  }

}

