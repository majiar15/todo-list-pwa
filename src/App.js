import React, { useEffect, useState } from 'react'


import './App.css';

import { Navbar } from './components/ui/navbar/Navbar';
import { categoryContext } from './context/categoryContext';
import { SelectCategory } from './components/ui/category/SelectCategory';
import { Buttombar } from './components/ui/navbar/Buttombar';




export const App = () => {
    const [category, setCategory] = useState("init");


    useEffect(() => {

        
    }, [category]);
    return (
        <categoryContext.Provider value={{category, setCategory}}>
            <Navbar/>
            <Buttombar />
            <SelectCategory categoryProp={category}/>
        </categoryContext.Provider>
    
    )
}
