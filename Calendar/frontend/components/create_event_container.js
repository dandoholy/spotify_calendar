import { connect } from 'react-redux';

import EventForm from './event_form';
import {
  createEvent
} from '../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    defaultEvent: {
      description: ''
    }
  }
}

const mapDispatchToProps = (state, ownProps) => {
  return {
    action: (event) => dispatch(createEvent(event))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
