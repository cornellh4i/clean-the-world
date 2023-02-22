import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/CustomButton/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      {/*TODO: Test out your buttons here!*/}
      <CustomButton
        text="small button"
        handleClick={() => alert('small button!')}
        css={buttonStyles.smallButton}
      />
      <CustomButton
        text="medium button"
        handleClick={() => alert('medium button!')}
        css={buttonStyles.medButton}
      />
      <CustomButton
        text="big button"
        handleClick={() => alert('big button!')}
        css={buttonStyles.bigButton}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const buttonStyles = StyleSheet.create({
  smallButton: {
    borderRadius: 8,
    padding: 6,
    width: 100,
    backgroundColor: 'red',
    borderColor: '#f0f0f0',
  },
  medButton: {
    borderRadius: 16,
    padding: 6,
    width: 200,
    backgroundColor: 'purple',
    borderColor: '#f0f0f0',
  },
  bigButton: {
    borderRadius: 16,
    padding: 6,
    width: 400,
    backgroundColor: 'green',
    borderColor: '#f0f0f0',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
