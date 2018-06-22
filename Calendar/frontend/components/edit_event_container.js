import { connect } from 'react-redux'
import { merge } from 'lodash'

import EventForm from './event_form'
import {
  updateEvent, deleteEvent
} from '../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  const defaultEvent = merge({}, state.entities.events.byId[ownProps.editId]);
  const datetime1 = defaultEvent.start_time.split("T")
  const dateString1 = datetime1[0]
  const datetime2 = defaultEvent.end_time.split("T")
  const dateString2 = datetime1[0]
  const start_time = dateString1 + ` ${datetime1[1].slice(0, 5)}`
  const end_time = dateString2 + ` ${datetime2[1].slice(0, 5)}`
  defaultEvent.start_time = start_time;
  defaultEvent.end_time = end_time;

  // debugger
  return {
    defaultEvent,
    dateString: dateString1
  }
}

const mapDispatchToProps = (state, ownProps) => {
  return {
    action: (event) => dispatch(updateEvent(event)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
