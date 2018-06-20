import { merge } from 'lodash';
import {
  RECEIVE_EVENT,
  RECEIVE_ALL_EVENTS,
  DELETE_EVENT
} from '../actions/event_actions';

const events = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_EVENT:
      return merge({}, state, action.event);
    case RECEIVE_ALL_EVENTS:
      return merge({}, state, action.events);
    case DELETE_EVENT:
      const newState = merge({}, state);
      delete newState[action.event_id];
      return newState;
    default:
      return state
  }
}

export default events;
