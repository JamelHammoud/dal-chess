import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './utils/theme'
import { Global } from './utils/global'
import ROUTES from './utils/router'

import { Component } from './components/Component'
import { Firebase } from './components/Firebase'
import { SignUp } from './components/SignUp'
import { SignIn } from './components/SignIn'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Router>
        <Switch>
          <Route path={ROUTES.App.signup} component={SignUp} />
          <Route path={ROUTES.App.signin} component={SignIn} />
          <Route path="*">
            {/*<Route path={ROUTES.App.home} component={Component} />*/}
            <Route path={ROUTES.App.home} component={Firebase} />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
