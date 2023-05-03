import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DataEntries from "../pages/data-entry";
import Profile from "../pages/Profile";

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Data Entry" component={DataEntries} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default NavBar;
