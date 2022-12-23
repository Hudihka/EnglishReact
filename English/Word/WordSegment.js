import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

export default function WordSegment() {

    const [activeIndex, setIndex] = useState(0);

    return (
        <View style={styles.container}>
            <SegmentedControl
                style={styles.segmentStyle}
                values={['Все слова', 'Фаворит']}
                selectedIndex={activeIndex}
                onChange={(event) => {
                    setIndex(event.nativeEvent.selectedSegmentIndex)
                }}
                fontStyle={styles.fontStyle}
                activeFontStyle={styles.activeFontStyle}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red'
    },
    segmentStyle: {
        height: 40,
        top: -16,
        marginHorizontal: 16,
        backgroundColor: '#fff',
        tintColor: '#000'
    },
    fontStyle: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    activeFontStyle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});
