import React from 'react';

const EventIndexItem = ({ event }) => {
  return (
    <li className="event-index-item">
      <span>Time: {event.times.start_time} - {event.times.end_time}</span>
      <br></br>
      <span>Description: {event.description}</span>

    </li>
  )
}

export default EventIndexItem;
