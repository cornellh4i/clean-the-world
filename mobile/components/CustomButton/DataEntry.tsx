import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

/** Component for a data entry
*/
const DataEntry = () => {
  const currDate = new Date();
  const currDay = currDate.getDate();
  const month = currDate.getMonth() + 1;
  const year = currDate.getFullYear();
  const [date, setDate] = useState(month.toString() + "/" + currDay.toString() + "/" + year.toString());
  const [fogNetID, setFogNetID] = useState("");
  const [clusterID, setClusterID] = useState("");
  const [fogNetModel, setFogNetModel] = useState("");
  const [waterCollected, setWaterCollected] = useState(0.0);

  return (
    <View style={styles.container}>
      <Text style={styles.promptText}>Date</Text>
      <TextInput
        value={date}
        style={styles.fieldBox}
        placeholder="MM/DD/YYYY"
        autoFocus
        keyboardType="numbers-and-punctuation"
        onChangeText={date => setDate(date)}
      />
      <Text style={styles.promptText}>Fog Net ID</Text>
      <TextInput
        style={styles.fieldBox}
        placeholder="Fog Net ID"
        onChangeText={fogNetID => setFogNetID(fogNetID)}
      />
      <Text style={styles.promptText}>Cluster ID</Text>
      <TextInput
        style={styles.fieldBox}
        placeholder="Cluster ID"
        onChangeText={clusterID => setClusterID(clusterID)}
      />
      <Text style={styles.promptText}>Model Name</Text>
      <TextInput
        style={styles.fieldBox}
        placeholder="Model Name"
        onChangeText={fogNetModel => setFogNetModel(fogNetModel)}
      />
      <Text style={styles.promptText}>Water Collected</Text>
      <TextInput
        style={styles.fieldBox}
        placeholder="0.0"
        keyboardType="decimal-pad"
        onChangeText={waterCollected => setWaterCollected(parseFloat(waterCollected))}
      />
      <TouchableOpacity style={styles.smallButton}
        onPress={async () => {
          try {
            alert("Date: " + date + "\n" + "Fog Net ID: " + fogNetID + "\n"
              + "Cluster ID: " + clusterID + "\n" + "Model Name: " + fogNetModel
              + "\n" + "Water Collected: " + waterCollected);
          } catch (err) {
            alert("Field missing or invalid input");
          }
        }}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef4e1',
    justifyContent: 'center'
  },
  smallButton: {
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    backgroundColor: '#9fd4a3',
    borderColor: '#f0f0f0'
  },
  buttonText: {
    fontFamily: 'Verdana',
    fontSize: 15,
    color: '#ffffff'
  },
  promptText: {
    fontFamily: 'Verdana',
    fontSize: 15
  },
  fieldBox: {
    marginVertical: 10,
    fontSize: 17,
    padding: 8,
    backgroundColor: "#ffffffff"
  }
});

export default DataEntry;