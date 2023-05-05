
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import DataEntry from "../components/DataEntry";
import DataEntry from '../components/DataEntry';
import { Screen } from '../components/Screen';

/** Component for Data Entry flow */
const DataEntries = () => {
  return (
    <Screen rightAction="back">
      <StatusBar style="auto" />
      <DataEntry />
    </Screen >
  );
};

export default DataEntries;
