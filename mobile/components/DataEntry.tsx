import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import SubmissionPopup from './SubmissionPopup';

/** Component for a data entry
*/
const DataEntry = () => {
  const [fogNetID, setFogNetID] = useState("");
  const [clusterID, setClusterID] = useState("");
  const [fogNetModel, setFogNetModel] = useState("");
  const [waterCollected, setWaterCollected] = useState("");
  const [editable, setEditable] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // Set placeholder date as today's date
  const currDate = new Date();
  const month = (currDate.getMonth() + 1 < 10 ? '0' : '') + (currDate.getMonth() + 1);
  const day = (currDate.getDate() < 10 ? '0' : '') + currDate.getDate();
  const year = currDate.getFullYear();
  const [date, setDate] = useState(month.toString() + "/" + day.toString() + "/" + year.toString());

  // Parse input date and convert to Date object
  function parseDate(dateStr: string) {
    const [month, day, year] = dateStr.split('/');
    // Note: JS Date object parsing can be unpredictable and is sensitive to
    // how the string date is formatted (e.g. can be one day off due to time zone)
    // Passing the parts in as below will ensure Date is hour 0 in the local time zone
    const date = new Date(parseInt(year), parseInt(month), parseInt(day));

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

  // Handle state for showing submission modal
  const handleShowModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 3000);
  }

  return (
    <View style={styles.container}>
      {showConfirm ? (
        <View style={styles.confirmContainer}>
          <Text style={styles.headerText}>Are you sure this information is correct?</Text>
          <Text><Text style={[styles.promptText, { padding: 5 }]}>Date: </Text><Text style={styles.inputText}>{date}</Text></Text>
          <Text><Text style={[styles.promptText, { padding: 5 }]}>Fog Net ID #: </Text><Text style={styles.inputText}>{fogNetID}</Text></Text>
          <Text><Text style={[styles.promptText, { padding: 5 }]}>Cluster ID #: </Text><Text style={styles.inputText}>{clusterID}</Text></Text>
          <Text><Text style={[styles.promptText, { padding: 5 }]}>Model Name: </Text><Text style={styles.inputText}>{fogNetModel}</Text></Text>
          <Text><Text style={[styles.promptText, { padding: 5 }]}>Water Collected (L): </Text><Text style={styles.inputText}>{waterCollected}</Text></Text>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={[styles.confirmButton, { backgroundColor: '#9fd4a3' }]}
              onPress={async () => {
                handleShowModal()
              }}>
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.confirmButton, { backgroundColor: '#fe8e86' }]}
              onPress={async () => {
                setShowConfirm(false);
                setEditable(true);
              }}>
              <Text style={styles.buttonText}>No</Text>
            </TouchableOpacity>
            {modalVisible && <SubmissionPopup />}
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={[styles.headerText, { paddingLeft: 105, paddingRight: 105 }]}>New Entry</Text>
          <Text style={styles.promptText}>Date:</Text>
          <TextInput
            value={date}
            style={styles.fieldBox}
            placeholder="MM/DD/YYYY"
            autoFocus
            keyboardType="numbers-and-punctuation"
            onChangeText={date => setDate(date)}
            editable={editable}
          />
          <Text style={styles.promptText}>Fog Net ID #:</Text>
          <TextInput
            value={fogNetID}
            style={styles.fieldBox}
            placeholder="Fog Net ID"
            onChangeText={fogNetID => setFogNetID(fogNetID)}
            editable={editable}
          />
          <Text style={styles.promptText}>Cluster ID #:</Text>
          <TextInput
            value={clusterID}
            style={styles.fieldBox}
            placeholder="Cluster ID"
            onChangeText={clusterID => setClusterID(clusterID)}
            editable={editable}
          />
          <Text style={styles.promptText}>Model Name:</Text>
          <TextInput
            value={fogNetModel}
            style={styles.fieldBox}
            placeholder="Model Name"
            onChangeText={fogNetModel => setFogNetModel(fogNetModel)}
            editable={editable}
          />
          <Text style={styles.promptText}>Water Collected (L):</Text>
          <TextInput
            value={waterCollected}
            style={styles.fieldBox}
            placeholder="0.0"
            keyboardType="decimal-pad"
            onChangeText={waterCollected => setWaterCollected(waterCollected)}
            editable={editable}
          />
          <TouchableOpacity style={styles.submitButton}
            onPress={async () => {
              try {
                if (!date.trim()) {
                  alert('Please Enter Date');
                } else if (dateIsValid(date) === false) {
                  alert('Invalid Date' + "\n" + 'Make sure date is MM/DD/YYYY');
                } else if (!fogNetID.trim()) {
                  alert('Please Enter Fog Net ID');
                } else if (!clusterID.trim()) {
                  alert('Please Enter Cluster ID');
                } else if (!fogNetModel.trim()) {
                  alert('Please Enter Model Name');
                } else if (isNaN(parseFloat(waterCollected)) || waterCollected.split('.').length > 2) {
                  alert('Please Enter a Valid Amount of Water Collected');
                } else if (dateIsValid(date) === true) {
                  if (waterCollected.slice(-1) === '.')
                    setWaterCollected(waterCollected + '0')
                  setEditable(false);
                  setShowConfirm(true);
                }
              } catch (err) {
                alert('Please complete all fields');
              }
            }}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef4e1',
    justifyContent: 'center',
    maxWidth: '89%'
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10
  },
  confirmContainer: {
    flex: 1,
    backgroundColor: '#fef4e1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitButton: {
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    margin: 20,
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: '#9fd4a3'
  },
  confirmButton: {
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    margin: 20,
    marginLeft: 15,
    marginRight: 15,
    flex: 1
  },
  headerText: {
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    padding: 20
  },
  buttonText: {
    fontFamily: 'Verdana',
    fontSize: 18,
    color: '#ffffff'
  },
  promptText: {
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    fontSize: 17
  },
  inputText: {
    fontFamily: 'Verdana',
    fontSize: 17
  },
  fieldBox: {
    marginVertical: 10,
    fontSize: 18,
    padding: 8,
    backgroundColor: "#ffffffff"
  }
});

export default DataEntry;