import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  onPress: () => void;
}

const BackButton = ({ onPress }: Props) => (
  <TouchableOpacity onPress={onPress} hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}>
    <Icon name="chevron-back" size={28} color="#ffffff"><Text style={styles.backText}>Back</Text></Icon>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  backText: {
    fontSize: 20,
    color: '#ffffff'
  }
});

export default BackButton;