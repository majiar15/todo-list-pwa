import React, { useEffect, useState } from 'react'


import './App.css';

import { Navbar } from './components/ui/navbar/Navbar';
import { categoryContext } from './context/categoryContext';
import { SelectCategory } from './components/ui/category/SelectCategory';




export const App = () => {
    const [category, setCategory] = useState("init");


    useEffect(() => {

        
    }, [category]);
    return (
        <categoryContext.Provider value={{category, setCategory}}>
            <Navbar/>
            <SelectCategory categoryProp={category}/>
            
        </categoryContext.Provider>
    
    )
}
