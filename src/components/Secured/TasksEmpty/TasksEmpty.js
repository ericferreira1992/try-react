import React from 'react';
import { Component } from 'react';
import './TasksEmpty.scss';

export default class TasksEmpty extends Component {

    render() {
        return <div className="tasks-empty animated fadeIn">
            <i className="material-icons">style</i>
            Nenhuma tarefa<br/>
            pendente
        </div>
    }
}