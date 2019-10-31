import React from 'react';
import { Component } from 'react';
import './TaskItem.scss';

export default class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: props.task ? props.task : {}
        }
    }

    render() {
        return <div className="task-item">
            {this.state.task.name}
        </div>
    }
}