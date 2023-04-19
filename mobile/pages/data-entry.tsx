import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'
import DataEntry from '../components/DataEntry';
import SubmissionPopup from '../components/SubmissionPopup';

/** Component for Data Entry Page */
const DataEntries = () => {
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
    backgroundColor: '#fef4e1',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default DataEntries;