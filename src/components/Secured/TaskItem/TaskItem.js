import React from 'react';
import { Component } from 'react';
import './TaskItem.scss';
import TasksService from '../../../services/tasks-service';

export default class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: props.task ? props.task : {},
            removing: false
        }
    }

    toggle = () => {
        this.setState(() => {
            let state = {
                ...this.state,
                task: {...this.state.task, done: (this.state.task.done ? false : true)},
            };
            TasksService.update(state.task);
            return state;
        })
    }

    remove = () => {
        if (!this.state.removing) {
            this.setState(() => {
                setTimeout(() => {
                    TasksService.remove(this.state.task);
                    this.props.update();
                }, 300);
                return {
                    ...this.state,
                    removing: true
                };
            });
        }
    }

    customStyleAnimation = () => {
        return {    
            animationDelay: (this.props.renderFirstTime ? ((this.props.pos - 1) * 150) : 0) + 'ms',
            animationDuration: (this.props.renderFirstTime ? 500 : 300) + 'ms',
        };
    }

    getDefaultEnterAnimationName = () => {
        return this.props.renderFirstTime ? 'flipInX': 'slideInLeft';
    }

    render() {
        return <div
            className={'task-item animated ' + (this.state.removing ? 'slideOutLeft' : this.getDefaultEnterAnimationName() + (this.state.task.done ? ' done': ''))}
            style={this.customStyleAnimation()}
        >
            <section className={'animated ' + (this.state.removing ? 'fadeOut' : 'fadeIn')} style={this.customStyleAnimation()}>
                <div className="check-cell">
                    <button type="button" onClick={this.toggle} className={ this.state.task.done ? 'checked' : '' }>
                        <i className="material-icons">
                            { this.state.task.done ? 'check_circle' : 'radio_button_unchecked' }
                        </i>
                    </button>
                </div>
                <div className="content-cell">
                    { this.state.task.name }
                </div>
                <div className="options-cell">
                    <button type="button" title="Remover" onClick={this.remove}>
                        <i className="material-icons">delete</i>
                    </button>
                </div>
            </section>
        </div>
    }
}