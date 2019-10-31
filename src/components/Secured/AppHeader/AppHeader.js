import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './AppHeader.scss';
import AuthService from '../../../services/auth-service';

export default class AppHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <header className="app-header">
            <section>
                <span>TaskManager</span>
            </section>
            <section className="app-header-opts">
                <Link to="/login" onClick={AuthService.logout}>
                    <button>
                        <i className="material-icons">exit_to_app</i>
                    </button>
                </Link>
            </section>
        </header>
    }
}