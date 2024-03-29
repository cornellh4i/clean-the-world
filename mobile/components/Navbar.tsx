import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DataRouter, ModalScreenList } from './../router';
import Profile from "../pages/Profile";
import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

interface Props {
  setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
  isEnglish: boolean;
}

const NavBar = ({isEnglish, setIsEnglish} : Props) => {
  const [firstName, setFirstName] = useState("Adriana");
  interface Props {
    navigation: StackNavigationProp<ModalScreenList>;
  }
  
  const DataEntryFlow = (navigation: Props) => {
    return (
     <DataRouter firstName={firstName} isEnglish={isEnglish} setIsEnglish={setIsEnglish}/>
    );
  };
  
  const ProfileFlow = (navigation: Props) => {
    return (
     <Profile setUpFirstName={setFirstName} upFirstName={firstName} isEnglish={isEnglish} setIsEnglish={setIsEnglish}/>
    );
  };

  return (
    <Tab.Navigator>
      <Tab.Screen name="Data Entry" options={{
          tabBarLabel: 'Data Entry',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-box-multiple" color={color} size={size} />
          ),
        }} component={DataEntryFlow} />
      <Tab.Screen name="Profile" options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }} component={ProfileFlow} />
    </Tab.Navigator>
  );
};

export default NavBar;
