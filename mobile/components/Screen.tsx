import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IScreenHeaderProps, ScreenHeader } from './ScreenHeader';

interface Props extends IScreenHeaderProps {
  children: ReactNode;
  setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
  isEnglish: boolean;
}

export const Screen: React.FC<Props> = ({ children, isEnglish, setIsEnglish, ...headerProps }) => {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
        <ScreenHeader {...headerProps} isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <View style={[styles.screen, { paddingBottom: safeAreaInsets.bottom }]}>
          {children}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#261CA6',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
});