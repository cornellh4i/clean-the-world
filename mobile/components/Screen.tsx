import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IScreenHeaderProps, ScreenHeader } from './ScreenHeader';

interface Props extends IScreenHeaderProps {
  children: ReactNode;
}

export const Screen: React.FC<Props> = ({ children, ...headerProps }) => {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
        <ScreenHeader {...headerProps} />
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