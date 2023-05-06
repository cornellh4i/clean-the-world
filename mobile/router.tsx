import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import Home from './pages/home';
import Welcome from './pages/welcome';
import DataEntries from './pages/data-entry';
import Dummy from './pages/dummy'

const Root = createStackNavigator();
const ModalStack = createStackNavigator();

export type RootScreenList = {
  Home: undefined;
};

export type ModalScreenList = {
  Home: undefined;
  Welcome: undefined;
  DataEntries: undefined;
  Confirm: undefined;
  Dummy: undefined;
};

interface Props {
  navigation: StackNavigationProp<ModalScreenList>;
}

interface firstNameProp {
  firstName: string;
}


export function DataRouter({ firstName }: firstNameProp) {
  const WelcomePage = ({navigation}: Props) => {
    return (
     <Welcome navigation = {navigation} firstName={firstName}/>
    );
  };

  return (
    <Root.Navigator screenOptions={{ headerShown: false }}>
      <Root.Screen name="Home" component={Home} />
      <Root.Screen name="Welcome" component={WelcomePage} />
      <ModalStack.Screen name="DataEntries" component={DataEntries} />
      <ModalStack.Screen name="Dummy" component={Dummy} />
    </Root.Navigator>
  );
};