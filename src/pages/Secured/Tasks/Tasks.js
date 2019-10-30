import React from 'react';
import { Component } from 'react';
import './Tasks.scss';

import TaskItem from './../../../components/Secured/TaskItem/TaskItem'

export default class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            tasks: []
        };
    }

    onTaskChange = (e) => {
        this.setState({
            task: e.target.value,
            tasks: this.state.tasks
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.task.length > 0) {
            this.setState({
                task: '',
                tasks: [
                    ...this.state.tasks,
                    { id: this.state.tasks.length + 1, name: this.state.task }
                ]
            })
        }
    }

    render() {
        return <div className="app-content">
            <div className="add-msg-container">
                <form onSubmit={this.onSubmit}>
                    <input
                        name="task"
                        type="text"
                        autoComplete="off"
                        placeholder="Nome da tarefa"
                        value={this.state.task}
                        onChange={this.onTaskChange}
                    />
                    <button type="submit">ADD</button>
                </form>
            </div>
            <div className="task-list-container">
                {
                    this.state.tasks.map((task) => {
                        return <TaskItem key={task.id} task={task} />;
                    })
                }
            </div>
        </div>
    }
}