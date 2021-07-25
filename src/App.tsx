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
import { Match } from './views/Match'
import { Matches } from './views/Matches'
import { Leaderboard } from './views/Leaderboard'
import { Calendar } from './views/Calendar'
import { EditProfile } from './views/EditProfile'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Router>
        <FirebaseProvider>
        <Switch>
          <Route path={ROUTES.App.signup} component={SignUp} />
          <Route path={ROUTES.App.signin} component={SignIn} />
          <Route path="*">
            <AppLayout>
              <Route exact path={ROUTES.App.home} component={Dashboard} />
              <Route exact path={ROUTES.App.inputMatch} component={Match} />
              <Route exact path={ROUTES.App.matches} component={Matches} />
              <Route exact path={ROUTES.App.leaderboard} component={Leaderboard} />
              <Route exact path={ROUTES.App.calendar} component={Calendar} />
              <Route exact path={ROUTES.App.editProfile} component={EditProfile} />

              <Route path={ROUTES.Admin.createEvent} component={CreateEvent} />
              <Route path={ROUTES.Admin.createPost} component={CreatePost} />
            </AppLayout>
          </Route>
        </Switch>
        </FirebaseProvider>
      </Router>
    </ThemeProvider>
  )
}
