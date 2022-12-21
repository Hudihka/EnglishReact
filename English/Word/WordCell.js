import { StyleSheet, Text, View } from 'react-native';

export default function WordCell() {
  return (
    <View style={styles.testStyle}>
      <Text> Текст на русском </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    testStyle: {
        backgroundColor: '#aaa'
    },
    russLabel: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 25,
      }
});
