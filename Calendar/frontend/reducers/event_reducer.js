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
      const {start_day, end_day} = action.event.days;
      const arr = (state[start_day]) ? state[start_day].slice() : [];
      const arr2 = (state[end_day]) ? state[end_day].slice() : [];
      if (!arr.includes(action.event.id)) arr.push(action.event.id);
      if (!arr2.includes(action.event.id)) arr2.push(action.event.id);
      return merge({}, state, {[start_day]: arr, [end_day]: arr2});
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
