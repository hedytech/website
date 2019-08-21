import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Servicespage from './servicespage';
import Academypage from './academypage';
import Innovationstudiopage from './innovationstudiopage';
import Aboutpage from './aboutpage';
import Teampage from './teampage';
import Hedypage from './hedypage';
import Fotnot from './fotnot';
import Kotlin from './kotlin';
import Bookingconditions from './bookingconditions';
import Privacypolicy from './privacypolicy';
import Hamburgermenu from './hamburgermenu';
import Loadingpagetwo from './loadingpagetwo';

/* eslint-disable */
// required for css imports
import Loadingpage from './loadingpage';
/* eslint-enable */

class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <div>
          <Hamburgermenu />
          <Route
            exact
            path='/'
            component={Loadingpagetwo}
          />
          <Route
            exact
            path='/services'
            component={Servicespage}
          />
          <Route
            path='/academy'
            component={Academypage}
          />
          <Route
            path='/innovationstudio'
            component={Innovationstudiopage}
          />
          <Route
            path='/about'
            component={Aboutpage}
          />
          <Route
            path='/team'
            component={Teampage}
          />
          <Route
            path='/kotlin'
            component={Kotlin}
          />
          <Route
            path='/hedypage'
            component={Hedypage}
          />
          <Route
            path='/bookingconditions'
            component={Bookingconditions}
          />
          <Route
            path='/privacypolicy'
            component={Privacypolicy}
          />
          <Fotnot />
        </div>
      </HashRouter>
    );
  }
}

export default App;
