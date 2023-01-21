import React from 'react';
import './Todo.css';
import SearchBar from '../searchbar/SearchBar';

const Todo = () => {

    const date = new Date();
    const localDate = date.toDateString().slice(4, 15);

    return (
        <div className='container'>
            <div className='todo-wrapper'>
                <div className='header'>
                    <button className='btn menu-icon'>
                        <i className='ri-menu-3-line'></i>
                    </button>
                    <SearchBar placeholder="Search task" data={todo} />
                </div>
                <div className='headline-banner'>
                    <span className='headline'>To-Do List</span>
                    <span className='headline-desc'>{localDate}</span>
                </div>
                <div className='header-action'>
                    <div className='header-action-wrapper'>
                        <button className='btn action-btn'>Add new task</button>
                        <span className='user-profile place-items-center'>
                            <img src={require('../../assets/user_profile_1.jpg')} className='user-profile-img '></img>
                        </span>
                    </div>
                </div>
            </div>
            <div className='main-content-wrapper'>
                <div className='task-count'>All tasks (5 tasks)</div>
                <div className='view-wrapper'>
                    <button className='btn view-btn'>
                        <i className="ri-list-unordered list-icon"></i>
                        <i className="ri-layout-grid-fill grid-icon"></i>
                    </button>
                    <div>
                        <select className='drop-down'>
                            <option value='' disabled selected>Sort by</option>
                            <option value='Order added'>Order added</option>
                            <option value='Earlier first'>Earlier first</option>
                            <option value='Later first'>Later first</option>
                            <option value='Completed first'>Completed first</option>
                            <option value='Uncompleted first'>Uncompleted first</option>
                        </select>
                    </div>
                </div>
                <div className='task-list-container d-grid'>
                    <div className='todo-list'>
                        <div className='todo-content'>
                            <div className='wrapper'>
                                <div className='todo-title'>title</div>
                                <span className='todo-desc'>description</span>
                            </div>
                            <div className='todo-time'>
                                <span className='place-items-center'>
                                <i class="ri-calendar-todo-line"/>
                                {localDate}
                                </span>
                            </div>
                        </div>
                        <div className='todo-action'>
                            <button className='btn todo-status-btn'>Uncompleted</button>
                            <div className='todo-action-btn-group btn'>
                                <i class="ri-star-line"></i>
                                <i class="ri-delete-bin-6-fill"></i>
                                <i class="ri-edit-box-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='footer'>To-do list</div> */}
        </div>
    )
}

export default Todo;

const todo = [
    { title: 'Todo-1' },
    { title: 'demo' },
    { title: 'example' }
];