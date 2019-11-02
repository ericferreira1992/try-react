import React from 'react';
import { Component } from 'react'
import { Redirect } from 'react-router-dom';
import './Login.scss';

import AuthService from '../../../services/auth-service';
import Spinner from '../../../components/Public/Spinner/Spinner';

export default class Login extends Component {

    set loading(value) {
        this.setState({
            ...this.state,
            loading: value
        });
    }

    get loading() { return this.state.loading; }
    
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            pass: '',
            loading: false
        };
    }

    onUserChange = (event) => {
        this.setState({
            ...this.state,
            user: event.target.value
        });
    }

    onPassChange = (event) => {
        this.setState({
            ...this.state,
            pass: event.target.value
        });
    }

    onSubmit = (event) => {
        if (this.isValid()){
            this.loading = true;
            let user = this.state.user;
            let pass = this.state.pass;
            AuthService.login(user, pass).then(
                (ok) => {
                    this.loading = false;
                },
                (error) => {
                    this.loading = false;
                    alert(error);
                }
            );
        }
        
        event.preventDefault();
    }

    isValid = () => {
        if (!this.state.user)
            return false;
        if (!this.state.pass || this.state.pass.length < 4)
            return false;

        return true;
    }

    render() {
        if (!AuthService.logged) {
                return  <div className="login-page">
                    { ( this.state.loading)
                        ? <Spinner/>
                        : <form onSubmit={this.onSubmit} className="animated fadeIn"> 
                            <h3>
                                <div>
                                    <i className="material-icons">assignment_turned_in</i>
                                </div>
                                <div>
                                    Task<br/>
                                    <span>Manager</span>
                                </div>
                            </h3>
                            <section>
                                <div className="form-group">
                                    <label>Usuário</label>
                                    <input  className="form-control"
                                        placeholder="Informe seu usuário"
                                        onChange={this.onUserChange}
                                        value={this.state.user}
                                        type="text"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Senha</label>
                                    <input  className="form-control"
                                        placeholder="Informe sua senha"
                                        onChange={this.onPassChange}
                                        value={this.state.pass}
                                        type="password"
                                    />
                                </div>
                
                                <button className="login-button">
                                    Entrar
                                </button>
                            </section>
                        </form> }
                </div>;
        }
        return <Redirect to={{ pathname: "/tasks", state: { from: this.props.location } }} />
    }
}