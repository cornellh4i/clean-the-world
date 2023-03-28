import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

/** Component for a data entry
*/
const DataEntry = () => {
  const [fogNetID, setFogNetID] = useState("");
  const [clusterID, setClusterID] = useState("");
  const [fogNetModel, setFogNetModel] = useState("");
  const [waterCollected, setWaterCollected] = useState(0.0);

  // Set placeholder date as today's date
  const currDate = new Date();
  const month = (currDate.getMonth() + 1 < 10 ? '0' : '') + (currDate.getMonth() + 1);
  const day = (currDate.getDate() < 10 ? '0' : '') + currDate.getDate();
  const year = currDate.getFullYear();
  const [date, setDate]: any = useState(month.toString() + "/" + day.toString() + "/" + year.toString());

  // Parse input date and convert to Date object
  function parseDate(dateStr: string) {
    const [month, day, year] = dateStr.split('/');
    const isoFormattedStr = `${year}-${month}-${day}`;
    const date = new Date(isoFormattedStr);

    return date
  }

  // Validate date formatted as MM/DD/YYYY
  function dateIsValid(dateStr: string) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;

    if (dateStr.match(regex) === null) {
      return false;
    }

    const [month, day, year] = dateStr.split('/');
    const isoFormattedStr = `${year}-${month}-${day}`;
    const d = new Date(isoFormattedStr);
    const timestamp = d.getTime();

    if (typeof timestamp !== 'number' || Number.isNaN(timestamp)) {
      return false;
    }

    return d.toISOString().startsWith(isoFormattedStr);
  }

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
            if (!date.trim()) {
              alert('Please Enter Date');
              return;
            } else if (dateIsValid(date) === false) {
              alert('Invalid Date' + "\n" + 'Make sure date is MM/DD/YYYY');
              return;
            } else if (!fogNetID.trim()) {
              alert('Please Enter Fog Net ID');
              return;
            } else if (!clusterID.trim()) {
              alert('Please Enter Cluster ID');
              return;
            } else if (!fogNetModel.trim()) {
              alert('Please Enter Model Name');
              return;
            } else if (isNaN(waterCollected)) {
              alert('Please Enter A Valid Amount of Water Collected');
              return;
            } else if (dateIsValid(date) === true) {
              setDate(parseDate(date));
              alert("Date: " + date + "\n" + "Fog Net ID: " + fogNetID + "\n"
                + "Cluster ID: " + clusterID + "\n" + "Model Name: " + fogNetModel
                + "\n" + "Water Collected: " + waterCollected);
            }
          } catch (err) {
            alert('Please complete all fields');
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