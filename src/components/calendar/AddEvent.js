import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddEvent({open,setOpen,day}) {

    const [value, setValue] = useState('');
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

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Escriba el evento para el dia { day }
          </DialogContentText>
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