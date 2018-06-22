import React from 'react';
import { connect } from 'react-redux';

import { removeEvent, updateEvent } from '../actions/event_actions';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {event, removeEvent} = this.props;
    return (
      <li className="event-index-item">
        <span className='del-icon' onClick={(e) => {
            e.stopPropagation();
            removeEvent(event.id)
          }}>🚮</span>
        <span className='edit-icon' onClick={(e) => {
            e.stopPropagation();
            this.props.changeToEdit("EDITING", event.id);
          }}>✏️</span>
        <br></br>
        <span>Time: {event.times.start_time} - {event.times.end_time}</span>


        <br></br>
        <span>Description: {event.description}</span>
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeEvent: (id) => dispatch(removeEvent(id)),
    updateEvent: (event) => dispatch(updateEvent(event))
  }

}

export default connect(null, mapDispatchToProps)(EventIndexItem);
