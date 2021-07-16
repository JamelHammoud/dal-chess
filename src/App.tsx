import ROUTES from './utils/router'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './utils/theme'
import { Global } from './utils/global'

import { FirebaseProvider } from './providers/FirebaseProvider'

import { Dashboard } from './views/Dashboard'
import { SignUp } from './views/SignUp'
import { SignIn } from './views/SignIn'
import { AppLayout } from './components/AppLayout'
import { CreateEvent } from './views/CreateEvent'
import { CreatePost } from './views/CreatePost'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <FirebaseProvider>
        <Global />
        <Router>
          <Switch>
            <Route path={ROUTES.App.signup} component={SignUp} />
            <Route path={ROUTES.App.signin} component={SignIn} />
            <Route path="*">
              <AppLayout>
                <Route exact path={ROUTES.App.home} component={Dashboard} />
                
                <Route path={ROUTES.Admin.createEvent} component={CreateEvent} />
                <Route path={ROUTES.Admin.createPost} component={CreatePost} />
              </AppLayout>
            </Route>
          </Switch>
        </Router>
      </FirebaseProvider>
    </ThemeProvider>
  )
}
