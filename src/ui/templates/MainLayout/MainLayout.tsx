import React from 'react';
import { Header } from 'ui/molecules/Header/Header';
import { AudioList } from 'ui/organims/AudioList/AudioList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SongProfile } from 'ui/organims/SongProfile/SongProfile';
import { ProviderContext } from 'Context/Context';
import { PlayerControls } from 'ui/molecules/PlayerControls/PlayerControls';
import { ProgressBar } from 'ui/molecules/ProgressBar/ProgressBar';
import { PlayerOptions } from 'ui/molecules/PlayerOptions/PlayerOptions';
import 'styles.scss';
import 'ui/templates/MainLayout/MainLayout.scss';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <ProviderContext>
      <Router>
        <div className="main-container">
          <Header />
          <Switch>
            <Route path="/" exact>
              <AudioList />
            </Route>
            <Route path="/:name">
              <SongProfile />
            </Route>
          </Switch>
          <div className="player-container">
            <PlayerControls />
            <ProgressBar />
            <PlayerOptions />
          </div>
        </div>
      </Router>
    </ProviderContext>
  );
};
