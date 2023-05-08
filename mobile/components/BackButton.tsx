import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  onPress: () => void;
  setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
  isEnglish: boolean;
}

const BackButton = ({ onPress, isEnglish, setIsEnglish }: Props) => (
  <TouchableOpacity onPress={onPress} hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}>
    <View style={styles.icon}>
      <Icon name="chevron-back" size={28} color="#ffffff" />
      <Text style={styles.backText}>{isEnglish ? "Back" : "Atrás"}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  backText: {
    fontSize: 20,
    color: '#ffffff',
  },
  icon: {
    width: 100,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default BackButton;