import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default function WordSwitch() {

    const [isShowTranslate, setValue] = useState(true);
    const toggleSwitch = () => setValue(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: '#000', true: '#000' }}
                thumbColor={'#fff'}
                ios_backgroundColor='#fff'
                onValueChange={toggleSwitch}
                value={isShowTranslate}
            />
            <Text style={styles.labbelStyle} > Скрыть перевод </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 16
    },
    labbelStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        left: 16
        // ,
        // flex: 1,
        // alignContent: 'center'
    }
});

/*
    let hideTranslate = UILabel()
        hideTranslate.font = UIFont.systemFont(ofSize: 20, weight: .semibold)
        hideTranslate.textColor = UIColor.black
        hideTranslate.text = WordsEndpoint.ViewText.hideTranslate.rawValue
*/