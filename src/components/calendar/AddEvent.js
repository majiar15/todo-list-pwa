import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TableEventCalendar } from './TableEventCalendar';
import { Typography } from '@material-ui/core';

const getData = (day)=>{
  const  dataLocalStorage = JSON.parse(localStorage.getItem('calendar'));
  let initDataDay = [];
  if(dataLocalStorage !== null){
    initDataDay =  dataLocalStorage.filter(x => x.date === day);
  }
  return initDataDay;
}

export default function AddEvent({open,setOpen,day}) {

  const [value, setValue] = useState('');
 
  
  const [data, setData] = useState(getData(day));

  //   const handleClickOpen = () => {
    //     setOpen(true);
    //   };
    const HandleSubmit = () => {
        if(value.trim() === ''){
            handleClose();
            return false;
        }
        const calendar = JSON.parse(localStorage.getItem('calendar'));
        const calendarObject = {
            "id": new Date().getTime(),
            "title": value,
            "date": day
        }
        
        if(calendar == null){
            const calendarArray = [];
            calendarArray.push(calendarObject);
            localStorage.setItem('calendar',JSON.stringify(calendarArray));
        }else{
            calendar.push(calendarObject);
            localStorage.setItem('calendar',JSON.stringify(calendar));
        };
        console.log(value);
        setData(getData(day))
        setOpen(false);
        setValue('');

    };
    const handleClose = () => {
        setOpen(false); 
        setValue('');
    };
    const HandleInputChange = (e) => {
        setValue(e.target.value);
    };
    const HandleDeleteEvent = (id) => {
      
      const dataLocal = JSON.parse(localStorage.getItem('calendar'))
      const newDataLocalStorage = dataLocal.filter( dataF => id !== dataF.id);
      const newDataState = data.filter( dataF => id !== dataF.id);
      localStorage.setItem('calendar', JSON.stringify(newDataLocalStorage));
      setData(newDataState);
   }
useEffect(() => {
  setData(getData(day));
}, [day])
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Eventos</DialogTitle>
        <DialogContent>
          <DialogContentText>
            eventos del dia 
            <strong>
              { " "+day }
            </strong>
          </DialogContentText>
          {
            data.length >=1
            ? <TableEventCalendar rows={data} HandleDeleteEvent={HandleDeleteEvent}/>
            : 'Agregue un nuevo evento'
          }
          <div className="p-2"></div>
          {
            data.length >=1
            ? <Typography variant="h6">Cree un nuevo evento</Typography>
            : ''
          }
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Evento"
            value={value}
            onChange={HandleInputChange}
            type="Text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={HandleSubmit} color="primary">
            Registrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}