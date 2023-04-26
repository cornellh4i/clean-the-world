import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import DataEntry from '../components/DataEntry';

/** Component for Data Entry Page */
const DataEntries = () => {
  // implement back button that goes back to Welcome page
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <DataEntry />
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#261CA6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFFFF'
  }
});

export default DataEntries;