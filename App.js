import React from 'react';
import { StyleSheet } from 'react-native';

import { Scene, Router } from 'react-native-router-flux';

import HomeView from './pages/HomeView/HomeView';
import ArtistDetailView from './pages/ArtistDetailView/ArtistDetailView';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={HomeView} hideNavBar={true} />
          <Scene key="artistDetail" component={ArtistDetailView} hideNavBar={false} />
        </Scene>
      </Router>
    );
  }
}
