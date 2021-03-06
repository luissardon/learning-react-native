import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ArtistBox extends React.Component {
  render() {

    const {
      artist: {
        image,
        name,
        likes,
        comments,
      },
      isFirst,
      isLast
    } = this.props;

    return (
      <View style={[
        styles.artistBox,
        isLast
          ? styles.artistBoxLast
          : isFirst
            ? styles.artistBoxFirst
            : {}
      ]}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Icon name="ios-heart-outline" size={30} color="gray"/>
              <Text style={styles.count}>{likes}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="ios-chatboxes-outline" size={30} color="gray"/>
              <Text style={styles.count}>{comments}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  artistBox: {
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height: 1,
      width: -2
    },
    elevation: 2
  },
  artistBoxFirst: {
    marginTop: 10
  },
  artistBoxLast: {
    marginBottom: 45
  },
  image: {
    width: 150,
    height: 150
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    fontSize: 20,
    marginTop: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 15
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center'
  },
  count: {
    color: 'gray'
  }
});
