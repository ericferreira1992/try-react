import React from 'react';
import { Component } from 'react';
import './NotFound.scss';

export default class NotFound extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="animated fadeIn">
            404
        </div>
    }
}