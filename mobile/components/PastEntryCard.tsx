import { View, StyleSheet, Text } from 'react-native'
//@ts-ignore
import ExpandableCard from 'expandablecard';

type CardProps = {
    date: string,
    liters: string,
    submitDate: string,
    submitTime: string
  }

export const PastEntryCard = (props: CardProps) => {
    return (
            <ExpandableCard
                headerStyle = {styles.headerText}
                title = {props.date}
                expanded={false}
                contentHeight = {80}
                contentContainerStyle={{height: 80}}>
                <View style={styles.contentContainer}>
                    <Text style={styles.contentText}> {props.liters + ' L collected'} </Text>
                    <Text style={styles.contentText}> {'submitted ' + props.submitDate + ', ' + props.submitTime} </Text>
                </View>
            </ExpandableCard>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef4e1',
    justifyContent: 'center',
    width: 360
  },
  headerText: {
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 20,
    padding: 12
  },
  contentContainer: {
    padding: 12,
    height: 60,
    borderRadius: 8
  },
  contentText: {
    fontFamily: 'Verdana',
    textAlign: 'left',
    fontSize: 14,
    padding: 4
  }
});
