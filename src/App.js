import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { useForm } from './hooks/useForm';

import './App.css';
import { TodosList } from './components/todoList/TodosList';




const init = () =>{ 
    return JSON.parse(localStorage.getItem('todos')) || [];
}
export const App = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    const handleDelete = (todoId) =>{
        const action = {
            type: 'delete',
            payload: todoId

        }
        dispatch(action);
    }
    const handleToggle = (todoId) =>{
        
        dispatch({ type: 'toggle', payload: todoId});
    }
    // console.log(description);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(description.trim().length <= 1 ){
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        const action = {
            type: 'add',
            payload: newTodo
        }
        dispatch(action);
        reset()
        console.log(todos);
        
    }

    return (
        <div>
            <h1>CositasApp ({ todos.length })</h1>
            <hr/>
            <div className="row">
                <div className="col-md-7 mb-5">
                    {/* TodosList todo, handleDelete, handleToggle */}
                    <TodosList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>
                </div>

                <div className="col-md-5 ">
                    <h4>Agregar Cositas Por Hacer</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            value={description}
                            onChange={handleInputChange}
                            placeholder="Aprender ..."
                            autoComplete="off"
                        />
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-outline-primary mt-1 btn-block">
                                Agregar
                            </button>
                        </div>
                    </form>
                </div>

            </div>
            
        </div>
    )
}
