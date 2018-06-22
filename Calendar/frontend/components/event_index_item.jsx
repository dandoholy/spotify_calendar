import React from 'react';
import { connect } from 'react-redux';

import { removeEvent, updateEvent } from '../actions/event_actions';

const EventIndexItem = ({ event, removeEvent }) => {
  return (
    <li className="event-index-item">
      <span>Time: {event.times.start_time} - {event.times.end_time}</span>
      <span className='del-icon' onClick={() => removeEvent(event.id)}>🚮</span>
      <br></br>
      <span>Description: {event.description}</span>
    </li>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeEvent: (id) => dispatch(removeEvent(id)),
    updateEvent: (event) => dispatch(updateEvent(event))
  }

}

export default connect(null, mapDispatchToProps)(EventIndexItem);
