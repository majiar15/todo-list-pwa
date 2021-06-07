import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../../../todoReducer';
import { TodosList } from '../../todoList/TodosList';
const init = () =>{ 
    return JSON.parse(localStorage.getItem('todos')) || [];
}
export const AllTodo = () => {
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

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

    return (
        <div className="container pt-3">
            <h1> Cositas App ({ todos.length })</h1>
            <hr/>
            
            <TodosList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} color={true}/>
        </div>
    )
}
