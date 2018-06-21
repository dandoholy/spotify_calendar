import * as EventAPIUtil from '../util/event_api_util';

export const RECEIVE_EVENT = 'RECEIVE_EVENT'
export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS'
export const DELETE_EVENT = 'DELETE_EVENT'

export const receiveEvent = (event) => {
  return {
    type: RECEIVE_EVENT,
    event
  }
}

export const receiveAllEvents = (events) => {
  return {
    type: RECEIVE_ALL_EVENTS,
    events
  }
}

export const deleteEvent = event_id => {
  type: DELETE_EVENT,
  event_id
}

export const fetchEvent = event_id => dispatch => {
  return EventAPIUtil.fetchEvent(event_id).then(
    (event) => dispatch(receiveEvent(event)))
}

export const fetchAllEvents = (date) => dispatch => {
  return EventAPIUtil.fetchAllEvents(date).then(
    (events) => dispatch(receiveAllEvents(events))
  )
}

export const createEvent = event => dispatch => {
  return EventAPIUtil.createEvent(event).then(
    (event) => dispatch(receiveEvent(event))
  )
}

export const updateEvent = event => dispatch => {
  return EventAPIUtil.updateEvent(event).then(
    (event) => dispatch(receiveEvent(event))
  )
}

export const removeEvent = event_id => dispatch => {
  return EventAPIUtil.deleteEvent(event_id).then(
    (event_id) => dispatch(deleteEvent(event_id))
  )
}
