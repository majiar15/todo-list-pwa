import { IconButton, Toolbar, Typography, AppBar,  Drawer, List, ListItemText, ListItemIcon, ListItem ,  makeStyles, Collapse } from '@material-ui/core'
// import HomeIcon  from '@material-ui/icons/home';
import {Menu, Work, Person, RadioButtonUnchecked, CalendarToday, ExpandLess, ExpandMore, Home, List as ListIcon}  from '@material-ui/icons/';
// import MenuIcon  from '@material-ui/icons/Menu';

import React, { useContext, useState } from 'react'
import { categoryContext } from '../../../context/categoryContext';

const useStyles = makeStyles((theme) => ({
    home: {
      color: "#0086BE",
    },
    work: {
      color: "#DCE2DC"
    },
    personal: {
      color: "#016F6E"
    },
    extra: {
      color: "#E8623C"
    },
    calendario: {
      color: "#FEB703"
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));

  
export const Navbar = () => {
    const clases = useStyles();
    const CategoryCtx = useContext(categoryContext);
    const [open, setOpen] = useState(false);
    const [home, setHome] = useState(false);
    const [work, setWork] = useState(false);
    const [person, setPerson] = useState(false);
    const [extra, setExtra] = useState(false);
    const [calendar, setCalendar] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const selectCtegory = (category)=>{
        CategoryCtx.setCategory(category);
        setOpen(false);
        
        setHome(false);
        setWork(false);
        setPerson(false);
        setExtra(false);
        setCalendar(false);
    }
    const handleDrawerClose = () => {
        setOpen(false);
    };
      const drawer = (
        <div>
          
          <List>
            <ListItem button key="inicio" onClick={()=>selectCtegory("")}>
                <ListItemIcon >
                    <ListIcon  className={clases.home}/>          
                </ListItemIcon>
                <ListItemText primary="Inicio" />
                
            </ListItem>
            <ListItem button key="home" onClick={()=> setHome(!home)}>
                <ListItemIcon >
                    <Home  className={clases.home}/>          
                </ListItemIcon>
                <ListItemText primary="Hogar" />
                {home ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={home} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button onClick={()=>selectCtegory("compras")}>
                    <ListItemText primary="Compras" />
                </ListItem>

                <ListItem button onClick={()=>selectCtegory("cocina")}>
                    <ListItemText primary="Cocina" />
                </ListItem>

                <ListItem button onClick={()=>selectCtegory("lavaderia")}>
                    <ListItemText primary="Lavaderia" />
                </ListItem>

                <ListItem button onClick={()=>selectCtegory("limpieza")}>
                    <ListItemText primary="Limpieza" />
                </ListItem>

                </List>
            </Collapse>

            <ListItem button key="Trabajo" onClick={() => setWork(!work)}>
                <ListItemIcon>
                    <Work className={clases.work}/>                   
                </ListItemIcon>
                <ListItemText primary="Trabajo" />
                {work ? <ExpandLess /> : <ExpandMore />}

            </ListItem> 

            <Collapse in={work} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button onClick={()=>selectCtegory("pendientes")}>
                    <ListItemText primary="Pendientes" />
                </ListItem>

                <ListItem button onClick={()=>selectCtegory("reuniones")}>
                    <ListItemText primary="Reuniones" />
                </ListItem>
                </List>
            </Collapse>

            <ListItem button key="Person" onClick={() => setPerson(!person)}>
                <ListItemIcon>
                    <Person className={clases.personal}/>                   
                </ListItemIcon>
                <ListItemText primary="Personal" />
                {person ? <ExpandLess /> : <ExpandMore />}

            </ListItem> 

            <Collapse in={person} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button onClick={()=>selectCtegory("cosas por hacer")}>
                    <ListItemText primary="Cosas por hacer" />
                </ListItem>

                <ListItem button onClick={()=>selectCtegory("peliculas")}>
                    <ListItemText primary="Peliculas" />
                </ListItem>
                <ListItem button onClick={()=>selectCtegory("series")}>
                    <ListItemText primary="series" />
                </ListItem>
                <ListItem button onClick={()=>selectCtegory("anime")}>
                    <ListItemText primary="Anime" />
                </ListItem>
                </List>
            </Collapse>

            <ListItem button key="extra" onClick={() => selectCtegory("extra")}>
                <ListItemIcon>
                    <RadioButtonUnchecked className={clases.extra}/>                   
                </ListItemIcon>
                <ListItemText primary="Cositas Extra" />
               

            </ListItem>  

            <ListItem button key="calendar" onClick={() => setCalendar(!calendar)}>
                <ListItemIcon>
                    
                    <CalendarToday className={clases.calendario}/>                   
                </ListItemIcon>
                <ListItemText primary="Calendario" /> 
                {calendar ? <ExpandLess /> : <ExpandMore />}

            </ListItem>  
          </List>

        </div>
      );
    return (
        <>
        <AppBar position="static" id="appBar">
            <Toolbar>
                <IconButton edge="start" onClick={handleDrawerOpen} color="inherit" aria-label="menu">
                <Menu />
                </IconButton>
                <Typography variant="h6">
                Cositas App
                </Typography>
            </Toolbar>
        </AppBar>
        
    <Drawer
      anchor="left"
      open={open}
      onClose={handleDrawerClose}
    >
     {drawer} 
    </Drawer>
        </>
    )
}
