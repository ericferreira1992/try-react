import React from 'react';
import { Component } from 'react';
import './App.scss';

import AppHeader from './components/AppSecured/AppHeader/AppHeader'
import AppContent from './components/AppSecured/AppContent/AppContent'

export default class App extends Component {
     constructor(props) {
          super(props);
     }

     render() {
          return <div className="app-root">
               <AppHeader />
               <AppContent />
          </div>
     }

     componentDidMount() {
     }

     componentDidUpdate() {
     }
}
