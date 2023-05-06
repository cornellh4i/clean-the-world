
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";
import DataEntry from "../components/DataEntry";
import { Screen } from '../components/Screen';


interface Props {
  setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
  isEnglish: boolean;
}

/** Component for Data Entry flow */

const DataEntries = ({ isEnglish, setIsEnglish} : Props) => {
  return (
    <Screen rightAction="back" isEnglish={isEnglish} setIsEnglish={setIsEnglish}>
      <StatusBar style="auto" />
      <ScrollView keyboardShouldPersistTaps='handled'>
        <DataEntry isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      </ScrollView>
    </Screen >
  );
};

export default DataEntries;
