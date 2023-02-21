import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CustomButton from './components/CustomButton/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <CustomButton style={styles.small} text="Small" />
      <CustomButton style={styles.medium} text="Medium" />
      <CustomButton style={styles.large} text="Large" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef4e1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  small: {
    borderRadius: 8,
    padding: 10,
    margin: 10,
    backgroundColor: '#f3aac0',
    borderColor: '#f0f0f0'
  },
  medium: {
    borderRadius: 16,
    padding: 30,
    margin: 10,
    backgroundColor: '#f3aac0',
    borderColor: '#f0f0f0'
  },
  large: {
    borderRadius: 36,
    padding: 90,
    margin: 10,
    backgroundColor: '#f3aac0',
    borderColor: '#f0f0f0'
  },
});

