import { Provider } from 'react-redux';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import React from 'react'

import CreateEventForm from './create_event_container'

const Root = ({ store }) => {
  return (
    <Provider store={ store } >
      <HashRouter>
        <Route path='/' component={CreateEventForm}></Route>
      </HashRouter>
    </Provider>

  )
}

export default Root;
