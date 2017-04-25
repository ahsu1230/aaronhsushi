import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Switch } from 'react-router'

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

render(<App/>, document.getElementById('app'));