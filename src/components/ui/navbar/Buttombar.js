import React, { useContext } from 'react'
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { categoryContext } from '../../../context/categoryContext';

const style = makeStyles({
    btn: {
        display: "flex",
        justifyContent: "start",
    }
});

export const Buttombar = () => {
    const clases = style();
    const CategoryCtx = useContext(categoryContext);
    if(CategoryCtx.category !== 'init'){
        return (
            <BottomNavigation
            className={clases.btn}
                onChange={() => {
                    
                }}
                
                >
                        <BottomNavigationAction   onClick={() => CategoryCtx.setCategory("init")} label="Back" icon={<ArrowBackIcon/>}  />
            </BottomNavigation>
        )
    }else{
        return null;
    }
}
