import React from 'react';
import { Component } from 'react';
import './Spinner.scss';

export default class Spinner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: props.loading
        }
    }

    render() {
        return <div className="loading-spinner animated fadeIn">
            <svg width="100" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="25" strokeLinecap="round"/>
            </svg>
        </div>
    }
}