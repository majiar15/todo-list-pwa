import { Category } from '../category/Category'
import React from 'react'
import { AllTodo } from '../principal/AllTodo'
import { Calendar } from '../../calendar/Calendar'

export const SelectCategory = ({categoryProp}) => {
    console.log(categoryProp)
    const renderComponent = (category) =>{
        switch (category) {
            case "compras":
                return <Category category="compras"/>
            case "cocina":
                return <Category category="cocina"/>
            case "lavaderia":
                return <Category category="lavaderia"/>
            case "limpieza":
                return <Category category="limpieza"/>
            case "pendientes":
                return <Category category="pendientes"/>
            case "reuniones":
                return <Category category="reuniones"/>
            case "cosas por hacer":
                return <Category category="cosas por hacer"/>
            case "peliculas":
                return <Category category="peliculas"/>
            case "series":
                return <Category category="series"/>
            case "anime":
                return <Category category="anime"/>
            case "extra":
                return <Category category="cositas extras"/>
            case "calendario":
                return <Calendar />
            default:
                return <AllTodo/>
        }
    }

 
    return (
        <>
        {
            renderComponent(categoryProp)
        }
        </>
    )
}
