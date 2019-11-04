import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../services/auth-service';

import './NotFound.scss';

export default class NotFound extends Component {

    render() {
        return <div className="not-found-page animated fadeIn">
            <i>404</i>
            <p>Ops!</p>
            Página não encontrada.

            <div className="not-found-back" title="Voltar">
                <Link to={AuthService.logged ? '/tasks' : '/login'}>
                    <i className="material-icons">arrow_back</i>
                </Link>
            </div>
        </div>
    }
}