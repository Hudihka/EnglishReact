import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function WordCell() {
  const favoritImage = require('../assets/favorit/favorit.png')
  const notFavoritImage = require('../assets/favorit/not_favorit.png')

  return (
    <View style={styles.testStyle}>
      <Image
        style={styles.imageStyle}
        source={notFavoritImage}
      />
      <Text style={styles.russLabel} > Текст на русском </Text>
      <Text style={styles.englLabel} > Текст на английском </Text>
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
    height: 50,
    width: 50,
    position: 'absolute',
    right: 0
  }
});
