import { StyleSheet, Dimensions } from 'react-native';

export const input = StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    margin: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  textInput: {},
});
export const button = StyleSheet.create({
  container: {
    backgroundColor: '#FF4949',
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export const button_outline = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    color: '#FF4949',
    fontWeight: 'bold',
  },
});

export const header = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#90a4ae',
  },
  textContainer: {
    flex: 1, //
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#78909c',
  },
});

export const post_input = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    alignSelf: 'center', //
    borderWidth: 1,
    borderColor: '#b0bec5',
    borderRadius: 5,
    bottom: 10,
    width: Dimensions.get('window').width * 0.9,
    position: 'absolute', //??????
    backgroundColor: '#e0e0e0',
  },
  inputContainer: {
    flex: 1,
  },
});

export const topicModal = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end', //
    margin: 0,
    // padding: 0,
    paddingHorizontal: 13,
  },
  container: {
    paddingTop: 5,
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  topicItemContainer: {
    padding: 10,
  },
  topicItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#78909c'
  },
});


export const postitem = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: 'flex-start',

  },
  headerContainer: {
    padding: 5,
    backgroundColor: '#34a5ff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 50,
    marginLeft: 6,
    marginHorizontal: 10,
  },
  username: {
    fontWeight: 'bold',
    color: 'white'
  },
  time: {
    color: 'white',
    fontStyle: 'italic',
    fontSize: 13
  },
  bodyContainer: {
    padding: 8,
    marginLeft: 6,
    backgroundColor: 'white',
    borderRadius: 30,

  },
});