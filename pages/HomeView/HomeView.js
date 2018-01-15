import React from 'react';
import { StyleSheet, View } from 'react-native';

import ArtistList from '../../components/ArtistList/ArtistList';

import { getArtists } from '../../services/api-client';

export default class HomeView extends React.Component {
  state = {
    artists: []
  }

  componentDidMount() {
    getArtists()
      .then( artists => {
        this.setState({
          artists
        });
      })
  }

  render() {
    const {
      artists
    } = this.state;

    return (
      <View style={styles.container}>
        <ArtistList artists={artists} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    marginTop: 45
  }
});
