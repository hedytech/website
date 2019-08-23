import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Hamburgermenu from './components/hamburgermenu';
import Fotnot from './components/fotnot';
import ScrollToTop from './components/scrolltotop';
import ServicesPage from './pages/servicespage';
import AcademyPage from './pages/academypage';
import InnovationStudioPage from './pages/innovationstudiopage';
import AboutPage from './pages/aboutpage';
import TeamPage from './pages/teampage';
import HedyPage from './pages/hedypage';
import KotlinPage from './pages/kotlinpage';
import BookingConditionsPage from './pages/bookingconditionspage';
import PrivacyPolicyPage from './pages/privacypolicypage';
import LoadingPage from './pages/loadingpage';

class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <ScrollToTop>
          <Hamburgermenu />
          <Route
            exact
            path='/'
            component={LoadingPage}
          />
          <Route
            exact
            path='/services'
            component={ServicesPage}
          />
          <Route
            path='/academy'
            component={AcademyPage}
          />
          <Route
            path='/innovationstudio'
            component={InnovationStudioPage}
          />
          <Route
            path='/about'
            component={AboutPage}
          />
          <Route
            path='/team'
            component={TeamPage}
          />
          <Route
            path='/kotlin'
            component={KotlinPage}
          />
          <Route
            path='/hedypage'
            component={HedyPage}
          />
          <Route
            path='/bookingconditions'
            component={BookingConditionsPage}
          />
          <Route
            path='/privacypolicy'
            component={PrivacyPolicyPage}
          />
          <Fotnot />
        </ScrollToTop>
      </HashRouter>
    );
  }
}

export default App;
