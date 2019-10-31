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
        return <div class="loading-spinner">
            <svg width="220" height="220" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle cx="110" cy="110" r="55" stroke-linecap="round"/>
            </svg>
        </div>
    }
}