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
  setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
  isEnglish: boolean;
}



export function DataRouter({ firstName, isEnglish, setIsEnglish }: firstNameProp) {
  const WelcomePage = ({navigation}: Props) => {
    return (
     <Welcome navigation = {navigation} firstName={firstName} isEnglish={isEnglish} setIsEnglish={setIsEnglish}/>
    );
  };
  const HomePage = ({navigation}: Props) => {
    return (
      <Home navigation = {navigation} isEnglish={isEnglish} setIsEnglish={setIsEnglish}/>
    );
  };
  const DataEntriesPage = () => {
    return (
      <DataEntries isEnglish={isEnglish} setIsEnglish={setIsEnglish}/>
    );
  };
  const DummyPage = () => {
    return (
      <Dummy isEnglish={isEnglish} setIsEnglish={setIsEnglish}/>
    );
  };
  return (
    <Root.Navigator screenOptions={{ headerShown: false }}>
      <Root.Screen name="Home" component={HomePage} />
      <Root.Screen name="Welcome" component={WelcomePage} />
      <ModalStack.Screen name="DataEntries" component={DataEntriesPage} />
      <ModalStack.Screen name="Dummy" component={DummyPage} />
    </Root.Navigator>
  );
};