import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { header } from './styles';

const Header = (props) => {
  return (
    <View style={header.container}>
      <View style={header.textContainer}>
        <Text style={header.text}>#{props.title}</Text>
      </View>
      <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
        <Icon
          name="dialpad"
          size={30}
          color="#34a5ff"
          onPress={props.onTopicModalSelect} //
          style={{
            marginRight: 10
          }}
        />
        <Icon
          name="login"
          size={30}
          color="#FF4949"
          onPress={props.onLogOut}
        />
      </View>
    </View>
  );
};

export { Header };
