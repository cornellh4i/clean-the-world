import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert} from 'react-native';
import CustomButton from './components/CustomButton/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      {/*TODO: Test out your buttons here!*/}
      <CustomButton css={styles.small} text="Small" handleClick={async () => Alert.alert("Small button pressed!")}/>
      <CustomButton css={styles.medium} text="Medium" handleClick={async () => Alert.alert("Medium button pressed!")}/>
      <CustomButton css={styles.large} text="Large Button" handleClick={async () => Alert.alert("Large button pressed!")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  small: {
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#557644',
    fontSize: 14
  },
  medium: {
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#80a96b',
    fontSize: 20
  },
  large: {
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#b1caa4',
    fontSize: 32
  }
});
