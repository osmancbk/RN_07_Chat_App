import React, { useState } from 'react';
import { SafeAreaView, View, Text, Alert, FlatList } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import moment from 'moment';
import { Header, PostInput, TopicSelectModal, PostItem } from '../components';
import { timelinePage } from './styles';
const user = auth().currentUser; //
// console.log(user)

const Timeline = () => {
  const [postList, setPostList] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [topicModalFlag, setTopicModalFlag] = useState(true);

  const selectingTopic = (value) => {
    database().ref(`/${selectedTopic}/`).off('value');//

    setSelectedTopic(value);
    setTopicModalFlag(false);

    database()
      .ref(`${value}`)
      .on('value', (snapshot) => {
        const data = snapshot.val();
        const formattedData =
          data == null
            ? []
            : Object.keys(data).map((key) => ({
              ...data[key],
              // userMail: data[key].userMail,
              // postText: data[key].postText,
              // time: data[key].time,
            }));
        //console.log('formattedData', formattedData);
        formattedData.sort((a, b) => {              //
          return new Date(b.time) - new Date(a.time);
        });

        setPostList(formattedData);
      });
  };

  const sendingPost = (value) => {
    const postObject = {
      userMail: user.email,
      postText: value,
      time: moment().toISOString(), //! Anlık zamanı almak için
    };

    database().ref(`${selectedTopic}/`).push(postObject); //
  };

  const renderPosts = ({ item }) => <PostItem post={item} />

  return (
    <SafeAreaView style={timelinePage.container}>
      <View style={timelinePage.container}>
        <Header
          title={selectedTopic}
          onTopicModalSelect={() => setTopicModalFlag(true)}
          onLogOut={() => auth().signOut()}
        />
        <FlatList
          keyExtractor={(_, i) => i.toString()}
          data={postList}
          renderItem={renderPosts}
        />
        <PostInput onSendPost={sendingPost} />
        <TopicSelectModal
          visibility={topicModalFlag}
          onClose={() => (selectedTopic ? setTopicModalFlag(false) : null)}
          onTopicSelect={selectingTopic} //
        />
      </View>
    </SafeAreaView>
  );
};
export { Timeline };
