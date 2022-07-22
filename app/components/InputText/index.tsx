import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import {Colors, Spacing} from '../../styles';

interface InputTextProps extends TextInputProps{
    textTitle: string;
    textPlaceholder: string;
}

export function InputText({textTitle, textPlaceholder, ...rest}: InputTextProps){
    return(
        <View style={styles.container}>
            <Text>{textTitle}</Text>
            <TextInput
                style={styles.input}
                placeholder={textPlaceholder}
                {...rest}
            />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        padding: Spacing.default.px2
    },
    input: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.default.blue,
        color: Colors.default.red,
        fontSize: Spacing.default.px2,
        marginTop: Spacing.default.px1,
        padding: Spacing.default.px1,
        borderRadius: Spacing.default.px1,
        textAlign: 'center',
        width: 310
    }
});
