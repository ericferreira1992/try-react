import React from 'react';
import { Component } from 'react';
import './AppContent.scss';

export default class AppContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="app-content animated fadeIn">
            {this.props.children}
        </div>
    }
}