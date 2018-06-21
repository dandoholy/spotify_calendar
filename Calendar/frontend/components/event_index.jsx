import React from 'react';
import { merge } from 'lodash';
import { connect } from 'react-redux';

import { getEventsByDay } from '../reducers/selectors';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const events = this.props.events;
    let list = (events) ? events.map(e => <EventIndexItem event={e} /> ) : null
    return (
      <li onClick={this.props.onClick} className={this.props.classlist}>
        {this.props.day}
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