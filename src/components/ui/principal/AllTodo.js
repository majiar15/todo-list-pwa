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
        <div>
            
            <TodosList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>
        </div>
    )
}
