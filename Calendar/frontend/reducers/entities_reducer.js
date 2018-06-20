import { merge } from 'lodash';
import { combineReducers } from 'redux';

import events from './event_reducer';

const entities = combineReducers(
  {
    events
  }
)

export default entities;
