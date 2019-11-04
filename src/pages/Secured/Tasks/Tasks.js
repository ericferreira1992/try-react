import React from 'react';
import { Component } from 'react';
import './Tasks.scss';

import TaskItem from './../../../components/Secured/TaskItem/TaskItem'
import TasksService from '../../../services/tasks-service';
import Helper from '../../../services/helper-service';
import TasksEmpty from '../../../components/Secured/TasksEmpty/TasksEmpty';

export default class Tasks extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            tasksAlreadyRendered: []
        };
    }

    onTaskInputChange = (e) => {
        this.setState({
            task: e.target.value,
            tasksAlreadyRendered: this.state.tasksAlreadyRendered
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.task.length > 0) {
            let newTask = TasksService.add({
                name: this.state.task,
                createDate: Helper.dateFormat(new Date())
            });
            
            console.log(newTask.id);
            this.setState({
                task: '',
                tasksAlreadyRendered: [...this.state.tasksAlreadyRendered, newTask.id]
            });
        }
    }

    onRemovedTask = (task) => {
        this.setState({
            task: this.state.task,
            tasksAlreadyRendered: this.state.tasksAlreadyRendered.filter(taskId => taskId !== task.id)
        })
    }

    taskNameIsValid = () => this.state.task && this.state.task.length >= 4;

    taskAlreadyRendered = (task) => this.state.tasksAlreadyRendered.some(taskId => taskId === task.id);

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
                    TasksService.tasks.length > 0
                        ? TasksService.tasks.map((task, i) => {
                            return <TaskItem
                                key={task.id}
                                pos={i}
                                task={task}
                                update={this.onRemovedTask.bind(this)} 
                                addedEffect={this.taskAlreadyRendered(task)}
                            />;
                        })
                        : <TasksEmpty/>
                }
            </div>
        </div>
    }
}