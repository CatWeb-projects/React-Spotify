import React from 'react';
import { Header } from 'ui/molecules/Header/Header';
import { AudioList } from 'ui/organims/AudioList/AudioList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SongProfile } from 'ui/organims/SongProfile/SongProfile';
import { ProviderContext } from 'Context/Context';
import 'styles.scss';
import { PlayerButtons } from 'ui/molecules/PlayerButtons/PlayerButtons';

export const MainLayout = ({ children }: any) => {
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
            <PlayerButtons />
          </div>
        </div>
      </Router>
    </ProviderContext>
  );
};
