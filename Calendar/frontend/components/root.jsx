import { Provider } from 'react-redux';
import { HashRouter, Route, withRouter } from 'react-router-dom';
import React from 'react'


const Root = ({ store }) => {
  return (
    <Provider store={ store } >
      <HashRouter>
        <h1>Hey</h1>
      </HashRouter>
    </Provider>

  )
}

export default Root;
