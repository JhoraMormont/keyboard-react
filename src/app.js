import React from 'react';
import ReactDOM from "react-dom";

import Keyboard from "./components/keyboard";

function App(){
  return (
    <div> 
      <Keyboard/>
    </div>
  )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)

