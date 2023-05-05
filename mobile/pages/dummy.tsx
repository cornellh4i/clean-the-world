import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native'
import { Screen } from '../components/Screen';

/** Component for Dummy Page */
const Dummy = () => {
  return (
    <Screen>
      <StatusBar style="auto" />
      <Text style={styles.headerText}>Done!</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#261CA6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 20,
    color: '#FFFFFF',
    textAlign: 'center'
  },
});

export default Dummy;