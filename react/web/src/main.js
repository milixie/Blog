import React from 'react'
import ReactDOM from 'react-dom'
import  { AppContainer } from 'react-hot-loader'
import App from './App'

const render = App => {
  ReactDOM.render(
    <AppContainer>
      <App></App>
    </AppContainer>,
    document.getElementById('app')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => render(App))
}
