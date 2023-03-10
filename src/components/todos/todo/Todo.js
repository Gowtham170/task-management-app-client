import React, { useState } from 'react';
import './Todo.css'

const Todo = ({localDate}) => {

    const [show, setShow] = useState(false);

    const onChangeHandler = (event) => {
        setShow(!show);
    }

    return (
        <div className='task-list-container d-grid'>
            {todos.map((t) => (
                <div className='todo-list' key={t.title}>
                    <div className='todo-content'>
                        <div className='wrapper'>
                            <div className='todo-title'>{t.title}</div>
                            <span className='todo-desc'>{t.description}</span>
                        </div>
                        <div className='todo-time'>
                            <span className='place-items-center'>
                                <i className="ri-calendar-todo-line" />
                                {localDate}
                            </span>
                        </div>
                    </div>
                    <div className='todo-action'>
                        {
                            show ? (<button className='btn todo-status-btn completed-status-btn' onClick={onChangeHandler}>Completed</button>)
                                 : (<button className='btn todo-status-btn uncompleted-status-btn' onClick={onChangeHandler}>Uncompleted</button>)
                        }
                        <div className='todo-action-btn-group btn'>
                            <i className="ri-star-line"></i>
                            <i className="ri-delete-bin-6-fill"></i>
                            <i className="ri-edit-box-line"></i>
                        </div>
                    </div>
                </div>
            ))}
            <button className='add-task btn'>Add new task</button>
        </div>
    )
}

export default Todo;

const todos = [
    {
        title: 'title-1',
        description: 'description-1'
    },
    {
        title: 'title-2',
        description: 'description-2'
    },
    {
        title: 'title-3',
        description: 'description-3'
    },
    {
        title: 'title-4',
        description: 'description-4'
    },
    {
        title: 'title-5',
        description: 'description-5'
    }
]