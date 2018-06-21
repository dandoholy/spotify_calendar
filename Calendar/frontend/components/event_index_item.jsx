import React from 'react';

const EventIndexItem = ({ event }) => {
  return (
    <li className="event-index-item">
      {event.times.start_time} - {event.times.end_time}
      {event.description}
    </li>
  )
}

export default EventIndexItem;
