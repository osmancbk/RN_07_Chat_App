import { StyleSheet, Dimensions } from 'react-native';

export const authStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: Dimensions.get('window').height / 4, //
        resizeMode: 'contain', //
    },
    logoText: {
        color: '#FF4949',
        fontSize: 35,
        fontWeight: 'bold'
    }
});
export const timelinePage = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#cfd8dc'
    },
  });