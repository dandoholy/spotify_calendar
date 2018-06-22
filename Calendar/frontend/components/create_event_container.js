import { connect } from 'react-redux';

import EventForm from './event_form';
import {
  createEvent
} from '../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    defaultEvent: {
      description: '',
      start_time: ownProps.dateString + " 00:00",
      end_time: ownProps.dateString + " 01:00"
    },
    titleStr: "Create an Event!"
  }
}

const mapDispatchToProps = (state, ownProps) => {
  return {
    action: (event) => dispatch(createEvent(event))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
