import { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'

/** Component for a data entry
 *  @param //
*/
const DataEntry = () => {
  // const id auto generated; ObjectID
  const [date, setDate] = useState(""); // Date object
  const [fogNetID, setFogNetID] = useState("");
  const [clusterID, setClusterID] = useState("");
  const [fogNetModel, setFogNetModel] = useState("");
  const [waterCollected, setWaterCollected] = useState(0.0);
  const [entry, setEntry]: any = useState(); // some way to store entry

  // keyboard covers fields and submit button -> scroll? tap out of keyboard?
  return (
    <View style={styles.container}>
      {/* {<Text style={styles.promptText}>Data Entry Created!</Text> 
      } */}
      <Text style={styles.promptText}>Date</Text>
      <TextInput
        style={styles.fieldBox} // auto date format; make sure date is valid
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
            // Some way to store the data entry with id
            alert("Done")
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
    // alignItems: 'center',
    justifyContent: 'center'
  },
  smallButton: {
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