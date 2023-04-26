import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native'

/** Component for Dummy Page */
const Dummy = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.headerText}>Done!</Text>
    </View>
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