import React from 'react';
import { Component } from 'react';
import './Tasks.scss';

import TaskItem from './../../../components/Secured/TaskItem/TaskItem'
import TasksService from '../../../services/tasks-service';
import Helper from '../../../services/helper-service';

export default class Tasks extends Component {
    renderFirstTime = true;

    constructor(props) {
        super(props);
        this.state = {
            task: ''
        };
    }
    
    componentDidMount() {
        this.renderFirstTime = false;
    }

    onTaskInputChange = (e) => {
        this.setState({
            task: e.target.value,
            tasks: this.state.tasks
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.task.length > 0) {
            TasksService.add({
                name: this.state.task,
                createDate: Helper.dateFormat(new Date())
            });
            this.setState({ task: '' })
        }
    }

    onRemovedTask = () => {
        this.setState({
            task: this.state.task,
        })
    }

    taskNameIsValid = () => {
        return this.state.task && this.state.task.length >= 4;
    }

    render() {
        return <div className="tasks-page animated fadeIn">
            <div className="add-msg-container">
                <form onSubmit={this.onSubmit}>
                    <input className="form-control"
                        name="task"
                        type="text"
                        autoComplete="off"
                        placeholder="Nome da tarefa"
                        value={this.state.task}
                        onChange={this.onTaskInputChange}
                    />
                    <button type="submit" disabled={!this.taskNameIsValid()}>
                        <i className="material-icons">add</i>
                    </button>
                </form>
            </div>
            <div className="task-list-container">
                {
                    TasksService.tasks.map((task, i) => {
                        return <TaskItem
                            key={task.id}
                            pos={i}
                            task={task}
                            update={this.onRemovedTask} 
                            renderFirstTime={this.renderFirstTime}
                        />;
                    })
                }
            </div>
        </div>
    }
}