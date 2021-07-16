import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './utils/theme'
import { Global } from './utils/global'
import ROUTES from './utils/router'

import { Component } from './components/Component'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Router>
        <Switch>
          <Route path={ROUTES.App.home} component={Component} />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
