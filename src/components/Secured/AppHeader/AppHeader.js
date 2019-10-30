import React from 'react';
import { Component } from 'react';
import './AppHeader.scss';

export default class AppHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <header className="app-header">
            <section>
                <span>TaskManager</span>
            </section>
        </header>
    }
}