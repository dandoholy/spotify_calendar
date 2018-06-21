import { merge } from 'lodash';
import { combineReducers } from 'redux';
import {
  RECEIVE_EVENT,
  RECEIVE_ALL_EVENTS,
  DELETE_EVENT
} from '../actions/event_actions';

const byId = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_EVENT:
      return merge({}, state, {[action.event.id]: action.event});
    case RECEIVE_ALL_EVENTS:
      return merge({}, action.events.byId);
    case DELETE_EVENT:
      const newState = merge({}, state);
      delete newState[action.event_id];
      return newState;
    default:
      return state
  }
}

const byDay = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_EVENT:
      return merge({}, state, action.event);
    case RECEIVE_ALL_EVENTS:
      return merge({}, action.events.byDay);
    case DELETE_EVENT:
      const newState = merge({}, state);
      delete newState[action.event_id];
      return newState;
    default:
      return state
  }
}

export default combineReducers({
  byId,
  byDay
});
