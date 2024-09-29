import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import './Calendar';

const localizer = momentLocalizer(moment);

export const MyCalendar = () => (
  <div>
    <Calendar
      localizer={localizer}
      //events={myEventsList}
      startAccessor='start'
      endAccessor='end'
    />
  </div>
);
