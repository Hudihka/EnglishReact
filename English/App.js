import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WordCell from './Word/WordCell';
import SegmentedControl from "segmented-control-rn";

export default function App() {

  const [activeIndex, setIndex] = useState(0);

  const segments = [
    {
      active: <Text style={styles.selectSegment} > Все </Text >,
      inactive: <Text style={styles.noSelectSegment}> Все </Text >,
    },
    {
      active: <Text style={styles.selectSegment}> Фаворит </Text >,
      inactive: <Text style={styles.noSelectSegment}> Фаворит </Text>,
    }
  ];

  return (
    <View style={styles.container}>
      <SegmentedControl
      // onChange={(index) => setIndex(index)}
      // segments={segments}
      // selectedIndex={activeIndex}
      />
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
