import React from 'react';
import './App.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Page from './Page';
import Homepage from './Homepage';
import { Route, Switch } from 'react-router-dom';
import SnackbarProvider from 'react-simple-snackbar'

import ProjectsList from './ProjectsList';
import ProjectInfo from './ProjectInfo';
import ContactMe from './ContactMe';

function App() {

  return (
    <div className="App">
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={500} classNames="Page">
            <Switch location={location}>
              <Route exact path="/" render={(routeProps) => <Page><Homepage {...routeProps} /></Page>} />
              <Route exact path="/portfolio" render={(routeProps) => <Page><ProjectsList {...routeProps} /></Page>} />
              <Route exact path="/portfolio/:projectName" render={(routeProps) => <Page><ProjectInfo {...routeProps} projectName={routeProps.match.params.projectName} /></Page>} />
              <Route exact path="/contact-me" render={(routeProps) => <Page><SnackbarProvider><ContactMe {...routeProps} /></SnackbarProvider></Page>} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  );
}

export default App;
