import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WordSegment from './Word/WordSegment';
import WordCell from './Word/WordCell';
import WordSwitch from './Word/WordSwitch';

export default function App() {
  return (
    <View style={styles.container}>
      <WordSegment />
      <WordSwitch />
      <WordCell />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  selectSegment: {
    backgroundColor: '#000'
  },
  noSelectSegment: {
    backgroundColor: '#fff'
  }
});
