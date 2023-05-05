import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import BackButton from './BackButton';

type TRightAction = 'back';

export interface IScreenHeaderProps {
  rightAction?: TRightAction;
}

export const ScreenHeader: React.FC<IScreenHeaderProps> = ({
  rightAction,
}) => {
  const navigation = useNavigation();
  const onPressBackHandle = () => navigation.goBack();

  const renderLeftAction = () => {
    if (rightAction === 'back') {
      return (
        <View style={styles.leftAction}>
          <BackButton onPress={onPressBackHandle} />
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.header}>
      {renderLeftAction()}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#261CA6',
    height: 50,
  },
  leftAction: {
    position: 'absolute',
    left: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
});