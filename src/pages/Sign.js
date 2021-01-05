import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { Input, Button } from '../components';
import { authStyle } from './styles';

const Sign = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  async function sign() {
    if (password === passwordRepeat) {
      try {
        await auth().createUserWithEmailAndPassword(email, password);
        Alert.alert('Chat App', '👍 Account created');
        //  props.navigation.goBack(); 
      } catch (error) {
        console.log(error.code);
        Alert.alert('ClarusChat', 'An error occured');
      }
    } else {
      Alert.alert('ClarusChat', 'Passwords are not match');
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#cfd8dc' }}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={authStyle.container}>
            <Image
              style={authStyle.logo}
              source={require('../assets/logo.png')}
            />
            <Text style={authStyle.logoText}>Chat APP</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Input
              inputProps={{
                placeholder: 'Type your email address..',
                keyboardType: 'email-address',
              }}
              onType={(value) => setEmail(value)}
            />
            <Input
              inputProps={{
                placeholder: 'Type your password..',
                secureTextEntry: true,
              }}
              onType={(value) => setPassword(value)}
            />
            <Input
              inputProps={{
                placeholder: 'Type your password again..',
                secureTextEntry: true,
              }}
              onType={(value) => setPasswordRepeat(value)}
            />
            <Button title="Create account" onPress={() => sign()} />
            <Button
              title="Cancel"
              noBorder
              onPress={() => props.navigation.goBack()}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export { Sign };
