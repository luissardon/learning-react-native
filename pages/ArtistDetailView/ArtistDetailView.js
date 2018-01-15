import React from 'react';
import { StyleSheet, View } from 'react-native';

import ArtistBox from '../../components/ArtistBox/ArtistBox';

import { getArtists } from '../../services/api-client';

export default class ArtistDetailView extends React.Component {
  render() {
    const {
      artist
    } = this.props;

    return (
      <View style={styles.container}>
        <ArtistBox artist={artist} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray'
  }
});
