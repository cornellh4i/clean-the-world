import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native'
import DataEntry from '../components/DataEntry';
import { StackNavigationProp } from '@react-navigation/stack';
import { ModalScreenList } from '../router';
import { Screen } from '../components/Screen';

/** Component for Data Entry flow */
interface Props {
  navigation: StackNavigationProp<ModalScreenList>;
}

const DataEntries = ({ navigation }: Props) => {
  return (
    <Screen rightAction="back">
      <StatusBar style="auto" />
      <DataEntry />
    </Screen >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#261CA6',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: '#261CA6'
  },
  authButton: {
    padding: 15,
    borderRadius: 20,
    margin: 8,
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 20,
    color: '#FFFFFF',
    textAlign: 'center'
  }
});

export default DataEntries;