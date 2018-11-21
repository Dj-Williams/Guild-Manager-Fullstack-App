// The react router is strictly concerned about which components will be shown in the dom. 
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import QuestPage from './components/QuestPage'
import SplashPage from './components/SplashPage';
import RosterPage from './components/RosterPage';
import ProfilePage from './components/ProfilePage';
import QuestEditForm from './components/QuestEditForm';
import AdventurerEditForm from './components/AdventurerEditForm';


class App extends Component {
  render() {
    return (
      <div> 

        {/* This holds all of our routing stuff. */}
        <Router>

          <div>
            <Navbar/>
            {/* ↓ This ensures that we get the route that we are asking for. */}
            <Switch>
                
              <Route exact path="/quests" component={QuestPage} />

              <Route exact path="/api/quests/:questId" component={QuestEditForm} />

              <Route exact path="/api/edit/adventurers/:adventurerId" component={AdventurerEditForm} />

              <Route exact path="/quests/:questId" component={RosterPage} />

              <Route exact path="/adventurers/:adventurerId" component={ProfilePage} />

              <Route exact path="/" component={SplashPage} />

            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
