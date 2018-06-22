import React from 'react';
import { merge } from 'lodash';
import { connect } from 'react-redux';

import { getEventsByDay } from '../reducers/selectors';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps){
    if (this.props.events !== prevProps.events) {
    }
  }

  render() {
    const events = this.props.events;
    // console.log(events)
    let list = (events) ? events.map(e => <EventIndexItem event={e} /> ) : null

    return (
      <li onClick={this.props.onClick} className={this.props.classlist}>
        <span>{this.props.day}</span>
        <br></br>
        <ul className="event-index">
          {list}
        </ul>
      </li>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const events = getEventsByDay(state, ownProps.day);
  return {
    events: events
  }
}

export default connect(mapStateToProps, null)(EventIndex);
