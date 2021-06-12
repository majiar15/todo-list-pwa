import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import AddEvent from './AddEvent';
export const Calendar = () => {
  const [open, setOpen] = React.useState(false);
  const [day, setDay] = React.useState('');
  const calendarEvents = JSON.parse(localStorage.getItem('calendar'));
  const handleDateClick = (arg) => { // bind with an arrow function
      setOpen(true);
      setDay(arg.dateStr);
    }
    return (
        <div className="container">
            <FullCalendar
            plugins={[ dayGridPlugin,interactionPlugin ]}
            initialView="dayGridMonth"
            weekends={true}
            events={
              calendarEvents != null 
              ? calendarEvents.map(event => event)
              : null
            }
            dateClick={handleDateClick}
          />
        <AddEvent open={open} setOpen={setOpen} day={day}/>
        </div>
    )
}
