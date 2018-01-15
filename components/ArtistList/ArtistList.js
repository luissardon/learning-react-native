import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';

import ArtistBox from '../ArtistBox/ArtistBox';

export default class ArtistList extends React.Component {
  handlePress( artist ) {
    Actions.artistDetail( { artist } );
  }

  render() {
    const { artists } = this.props;

    return (
      <FlatList
        data={artists}
        renderItem={({item, index}) => {
          const isFirst = index === 0;
          const isLast = index === artists.length - 1;

          return (
            <TouchableOpacity onPress={() => this.handlePress( item )}>
              <ArtistBox artist={item} isFirst={isFirst} isLast={isLast} />
            </TouchableOpacity>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
});
