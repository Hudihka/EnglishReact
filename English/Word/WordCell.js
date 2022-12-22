import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default function WordCell() {
  const favoritImage = require('../assets/favorit/favorit.png')
  const notFavoritImage = require('../assets/favorit/not_favorit.png')

  return (
    <View style={styles.testStyle}>
      <Text style={styles.russLabel} numberOfLines={1}> Текст на русскомb000000000000 </Text>
      <Text style={styles.englLabel} > Текст на английском </Text>
      <TouchableOpacity
        style={styles.buttonWithImageStyle}
        activeOpacity={1}
        onPress={() => { console.log("0000") }}
      >
        <Image
          source={notFavoritImage}
          style={styles.imageStyle}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  testStyle: {
    backgroundColor: '#444',
    height: 75
  },
  russLabel: {
    top: 8,
    paddingHorizontal: 16,
    textAlign: 'left',
    fontSize: 25,
    fontWeight: 'bold'
  },
  englLabel: {
    top: 8,
    paddingHorizontal: 16,
    textAlign: 'left',
    fontSize: 25
  },
  imageStyle: {
    height: 25,
    width: 25
  },
  buttonWithImageStyle: {
    height: 50,
    width: 50,
    position: 'absolute',
    right: 0,
    justifyContent: "center",
    alignItems: "center"
  }
});