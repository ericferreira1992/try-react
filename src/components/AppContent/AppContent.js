import React from 'react';
import { Component } from 'react';
import './AppContent.scss';

export default class AppContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    render() {
        return <div className="app-content">
            <div className="add-msg-container">
                <input type="text" value={this.state.value} />
                <button>OK</button>
            </div>
        </div>
    }
}