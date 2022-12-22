import { Button, StyleSheet, Text, View } from 'react-native';

export default function WordCell() {
  return (
    <View style={styles.testStyle}>
      <Text style={styles.russLabel} > Текст на русском </Text>
      <Text style={styles.englLabel} > Текст на английском </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    testStyle: {
        backgroundColor: '#aaa',
        height: 75
    },
    russLabel: {
        top: 8,
        paddingHorizontal: 16,
        textAlign: 'left',
        // height: 25,
        fontSize: 25,
        fontWeight: 'bold'
      },
    englLabel: {
      top: 8,
      paddingHorizontal: 16,
      textAlign: 'left',
      fontSize: 25
    },
    buttonStyle: {
      height: 50,
      width: 50,
      top: 0,
      right:0,
      backgroundColor: '#888'
    }
});
