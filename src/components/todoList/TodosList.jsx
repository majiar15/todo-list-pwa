import React from 'react'
import { TodoListItem } from '../todoListItem/TodoListItem'
export const TodosList = ({todos, handleDelete, handleToggle}) => {
    
    return (
        <ul className="list-group list-group-flush">
        {
            todos.map( (todo, i) =>(
                // todoListItem, todo, index
                <TodoListItem  key={ todo.id } todo={todo} index ={i} handleDelete={handleDelete} handleToggle={handleToggle} />
            ))
        }
    </ul>
    )
}
