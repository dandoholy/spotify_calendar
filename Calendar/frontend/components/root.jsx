import { Provider } from 'react-redux';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import React from 'react'

import Calendar from './calendar'

const Root = ({ store }) => {
  return (
    <Provider store={ store } >
      <HashRouter>
        <Route path='/' component={Calendar}></Route>
      </HashRouter>
    </Provider>

  )
}

export default Root;
