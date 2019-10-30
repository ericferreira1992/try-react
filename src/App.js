import React from 'react';
import { Component } from 'react';
import Routes from './routes';
import './App.scss';

export default class App extends Component {
     constructor(props) {
          super(props);
     }

     render() {
          return <Routes/>
     }

     componentDidMount() {
     }

     componentDidUpdate() {
     }
}
