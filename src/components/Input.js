import React from 'react';
import { SafeAreaView, Text, View, Alert, Image, TextInput } from 'react-native'
import { input } from './styles';

const Input = (props) => {
    return (
        <View style={input.container} >
            <TextInput
                style={input.textInput}
                {...props.inputProps}
                onChangeText={props.onType}
            />
        </View>
    )
}
export { Input };