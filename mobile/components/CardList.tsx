import { PastEntryCard } from "./PastEntryCard";
import { View, StyleSheet } from "react-native";

type CardProps = {
  date: string,
  liters: string,
  submitDate: string,
  submitTime: string
}

type CardPropList = {
  data: CardProps[]
}

const CardList = (props: CardPropList) => {
  return (
    <View style={styles.container}>
      {props.data.map((entry, index) => (
      <PastEntryCard key={index}
      date={entry.date}
      liters={entry.liters}
      submitDate={entry.submitDate}
      submitTime={entry.submitTime}
    />
  ))}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef4e1',
    justifyContent: 'center',
    width: 360
  }});

export default CardList;