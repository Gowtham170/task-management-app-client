import React from 'react';
import './Todos.css';
import Header from './header/Header';
import Todo from './todo/Todo';

const Todos = () => {

    const date = new Date();
    const localDate = date.toDateString().slice(4, 15);

    return (
        <div className='container section'>
            <Header localDate={localDate}/>
            
            <div className='main-content-wrapper'>
                <div className='task-count'>All tasks (5 tasks)</div>
                <div className='view-wrapper'>
                    <button className='btn view-btn'>
                        <i className="ri-list-unordered list-icon"></i>
                        <i className="ri-layout-grid-fill grid-icon"></i>
                    </button>
                    <div>
                        <select className='drop-down'>
                            <option value='' disabled selected >Sort by</option>
                            <option value='Order added'>Order added</option>
                            <option value='Earlier first'>Earlier first</option>
                            <option value='Later first'>Later first</option>
                            <option value='Completed first'>Completed first</option>
                            <option value='Uncompleted first'>Uncompleted first</option>
                        </select>
                    </div>
                </div>

                <Todo localDate={localDate}/>
            </div>
            <div className='footer'>To-do list</div>
        </div>
    )
}

export default Todos;