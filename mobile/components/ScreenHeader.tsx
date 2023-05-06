import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import BackButton from './BackButton';
import LanguageSwitch from './LanguageSwitch';

type TRightAction = 'back';

export interface IScreenHeaderProps {
  rightAction?: TRightAction;
  setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
  isEnglish: boolean;
}

export const ScreenHeader: React.FC<IScreenHeaderProps> = ({
  rightAction, setIsEnglish, isEnglish
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

  const renderRightAction = () => {
      return (
        <View style={styles.rightAction}>
          <LanguageSwitch setLangauge={setIsEnglish} language={isEnglish} />
        </View>
      );
    };

  return (
    <View style={styles.header}>
      {renderLeftAction()}
      {renderRightAction()}
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
    marginBottom: 0,
    zIndex : 1
  },
  leftAction: {
    position: 'absolute',
    left: 16,
  },
  rightAction : {
    position: 'absolute',
    right: 18,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
});