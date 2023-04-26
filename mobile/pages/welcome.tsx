import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import DataEntries from './data-entry';
import { useState } from 'react';

/** Component for Welcome Page */
const Welcome = () => {
  const [showNewEntry, setShowNewEntry] = useState(false)
  return (
    <View style={styles.container}>
      {showNewEntry ? (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <DataEntries />
        </View >
      ) : (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text style={styles.headerText}>Hi, Adriana! You haven't entered any data today yet.</Text>
          <TouchableOpacity style={styles.entryButton}
            onPress={async () => {
              setShowNewEntry(true)
            }}>
            <Text style={styles.buttonText}>+  Add Today's Entry</Text>
          </TouchableOpacity>
        </View >
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#261CA6',
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 20,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  entryButton: {
    padding: 15,
    borderRadius: 20,
    margin: 8,
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: '#ffffff'
  },
  buttonText: {
    fontSize: 20,
    color: '#261CA6'
  },
});

export default Welcome;