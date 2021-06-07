import React from 'react'
import Delete from '@material-ui/icons/DeleteOutline';

export const TodoListItem = ({todo, index ,handleToggle, handleDelete, color}) => {
    const selectColor =(todoParam) =>{
        switch (todoParam.category) {
            case "compras":
                return "orange";
            case "cocina":
                return "pink";
            case "lavaderia":
                return "green";
            case "limpieza":
                return "purple";
            case "pendientes":
                return "DeepSkyBlue";
            case "reuniones":
                return "OrangeRed";
            case "cosas por hacer":
                return "PaleVioletRed";
            case "peliculas":
                return "DarkKhaki";
            case "series":
                return "DarkGreen";
            case "anime":
                return "DarkSlateBlue";
            default:
                return "black";
        }
    }
    if(color){
        return (
            <li
               
                className="list-group-item"
            > 
                <p className={`${todo.done && 'complete'}`} onClick={()=>{handleToggle(todo.id)}} style={{color: selectColor(todo) }}> {index+1}.{todo.desc}</p> 
                <button
                    onClick={()=>{ handleDelete(todo.id) }}
                    className="btn btn-danger"
                >
                    <Delete/>
                </button>
            </li>
        )
    }else{
        return (
            <li
               
                className="list-group-item"
            > 
                <p className={`${todo.done && 'complete'}`} onClick={()=>{handleToggle(todo.id)}}> {index+1}.{todo.desc}</p> 
                <button
                    onClick={()=>{ handleDelete(todo.id) }}
                    className="btn btn-danger"
                >
                    <Delete/>
                </button>
            </li>
        )
    }

}
