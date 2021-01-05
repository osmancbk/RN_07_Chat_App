import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { topicModal } from './styles';

const topics = [
  'React',
  'Angular',
  'Vue',
  'jQuery',
  'Backbone',
  'Node',
  'Ember',
];

const TopicSelectModal = (props) => {
  return (
    <Modal
      isVisible={props.visibility}
      style={topicModal.modal} //
      onBackdropPress={props.onClose}
    // swipeDirection="down"
    // onSwipeComplete={props.onClose}
    >
      <View style={topicModal.container}>
        {topics.map((topic, i) => {
          return (
            <TouchableOpacity
              style={topicModal.topicItemContainer}
              key={i} //
              onPress={() => props.onTopicSelect(topic)}
            >
              <Text style={topicModal.topicItemText}>#{topic}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Modal>
  );
};
export { TopicSelectModal };
