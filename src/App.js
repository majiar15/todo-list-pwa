import React from 'react'


import './App.css';

import { Navbar } from './components/ui/navbar/Navbar';
import { AllTodo } from './components/ui/principal/AllTodo';
import { Category } from './components/ui/category/Category';




export const App = () => {



    return (
        <div>
            <Navbar/>

            {/* <AllTodo/> */}
            <Category category="cositas del hogar"/>
            
        </div>
    
    )
}
