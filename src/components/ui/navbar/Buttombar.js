import React, { useContext } from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { categoryContext } from '../../../context/categoryContext';



export const Buttombar = () => {
    const CategoryCtx = useContext(categoryContext);
    if(CategoryCtx.category !== 'init'){
        return (
            <div className="container mt-2">
                <ArrowBackIcon onClick={() => CategoryCtx.setCategory("init")}/>

            </div>
        )
    }else{
        return null;
    }
}
