
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import SubmissionPopup from './SubmissionPopup';
import Dummy from '../pages/dummy';

interface Props {
  setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
  isEnglish: boolean;
}

/** Component for a data entry */
const DataEntry = ({ isEnglish, setIsEnglish} : Props) => {
  const [fogNetID, setFogNetID] = useState("");
  const [clusterID, setClusterID] = useState("");
  const [fogNetModel, setFogNetModel] = useState("");
  const [waterCollected, setWaterCollected] = useState("");
  const [editable, setEditable] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [complete, setComplete] = useState(false);

  // Set placeholder date as today's date
  const currDate = new Date();
  const month =
    (currDate.getMonth() + 1 < 10 ? "0" : "") + (currDate.getMonth() + 1);
  const day = (currDate.getDate() < 10 ? "0" : "") + currDate.getDate();
  const year = currDate.getFullYear();
  const [date, setDate] = useState(
    month.toString() + "/" + day.toString() + "/" + year.toString()
  );

  // // Parse input date and convert to Date object
  // function parseDate(dateStr: string) {
  //   const [month, day, year] = dateStr.split('/');
  //   // Note: JS Date object parsing can be unpredictable and is sensitive to
  //   // how the string date is formatted (e.g. can be one day off due to time zone)
  //   // Passing the parts in as below will ensure Date is hour 0 in the local time zone
  //   const date = new Date(parseInt(year), parseInt(month), parseInt(day));

  //   return date
  // }

  // Validate date formatted as MM/DD/YYYY
  function dateIsValid(dateStr: string) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;

    if (dateStr.match(regex) === null) {
      return false;
    }

    const [month, day, year] = dateStr.split("/");
    const isoFormattedStr = `${year}-${month}-${day}`;
    const d = new Date(isoFormattedStr);
    const timestamp = d.getTime();

    if (typeof timestamp !== "number" || Number.isNaN(timestamp)) {
      return false;
    }

    return d.toISOString().startsWith(isoFormattedStr);
  }

  // Handle state for showing submission modal
  const handleShowModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      setShowConfirm(false);
      setComplete(true);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      {showConfirm ? (
        <Text style={styles.headerText}>{isEnglish ? "Are you sure this information is correct?" : "¿Está seguro de que esta información es correcta?"}</Text>
      ) : !complete ? (
        <Text style={[styles.headerText, { paddingLeft: 105, paddingRight: 105 }]}>{isEnglish ? "New Entry" : "Nueva Entrada"} </Text>
      ) : (
        <Dummy isEnglish={isEnglish} setIsEnglish={setIsEnglish}/>
      )}
      {!complete &&
        <View>
          <View style={styles.inlineContainer}>
            <Text style={styles.promptText}>{isEnglish ? "Date   " : "Fecha   "}</Text>
            <TextInput
              value={date}
              style={[styles.fieldBox, { backgroundColor: editable ? '#ffffff' : '#ececec' }]}
              placeholder="MM/DD/YYYY"
              autoFocus
              keyboardType="numbers-and-punctuation"
              onChangeText={date => setDate(date)}
              editable={editable}
            /></View>
          <View style={styles.inlineContainer}>
            <Text style={styles.promptText}>{isEnglish ? "Fog Net ID #   " : "Red de niebla ID #   "}</Text>
            <TextInput
              value={fogNetID}
              style={[styles.fieldBox, { backgroundColor: editable ? '#ffffff' : '#ececec' }]}
              placeholder={isEnglish ? "Fog Net ID" : "Red de niebla ID"}
              onChangeText={fogNetID => setFogNetID(fogNetID)}
              editable={editable}
            /></View>
          <View style={styles.inlineContainer}>
            <Text style={styles.promptText}>{isEnglish ? "Cluster ID #   " : "Grupo ID #   "}</Text>
            <TextInput
              value={clusterID}
              style={[styles.fieldBox, { backgroundColor: editable ? '#ffffff' : '#ececec' }]}
              placeholder={isEnglish ? "Cluster ID" : "Grupo ID"}
              onChangeText={clusterID => setClusterID(clusterID)}
              editable={editable}
            /></View>
          <View style={styles.inlineContainer}>
            <Text style={styles.promptText}>{isEnglish ? "Model Name   " : "Nombre del Modelo   "}</Text>
            <TextInput
              value={fogNetModel}
              style={[styles.fieldBox, { backgroundColor: editable ? '#ffffff' : '#ececec' }]}
              placeholder={isEnglish ? "Model Name" : "Nombre del Modelo"}
              onChangeText={fogNetModel => setFogNetModel(fogNetModel)}
              editable={editable}
            /></View>
          <View style={styles.inlineContainer}>
            <Text style={styles.promptText}>{isEnglish ? "Water Collected   " : "Agua Recolectada   "}</Text>
            <TextInput
              value={waterCollected}
              style={[styles.fieldBox, { backgroundColor: editable ? '#ffffff' : '#ececec' }]}
              placeholder="0.0"
              keyboardType="decimal-pad"
              onChangeText={waterCollected => setWaterCollected(waterCollected)}
              editable={editable}
            /><Text style={styles.promptText}>   L</Text></View>
        </View>
      }
      {showConfirm ? (
        <View>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#ffffff', marginTop: 30, marginLeft: 30, marginRight: 30 }]}
            onPress={async () => {
              handleShowModal();
            }}>
            <Text style={styles.buttonText}>{isEnglish ? "Yes" : "Sí"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#C4BFFF', margin: 8, marginLeft: 30, marginRight: 30 }]}
            onPress={async () => {
              setShowConfirm(false);
              setEditable(true);
            }}>
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
          {modalVisible && <SubmissionPopup isEnglish={isEnglish} setIsEnglish={setIsEnglish} />}
        </View>
      ) : !complete ? (
        <View>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#FFFFFF', margin: 20, marginLeft: 30, marginRight: 30 }]}
            onPress={async () => {
              try {
                if (!date.trim()) {
                  alert(isEnglish ? "Please Enter Date" : "Por favor ingrese La Fecha");
                } else if (dateIsValid(date) === false) {
                  alert(isEnglish ? "Invalid Date" + "\n" + "Make sure date is MM/DD/YYYY" : "Fecha invalida"  + "\n" + "Asegúrese de que la fecha sea DD/MM/AAAA");
                } else if (!fogNetID.trim()) {
                  alert(isEnglish ? "Please Enter Fog Net ID" : "Por favor ingrese Red de Niebla ID");
                } else if (!clusterID.trim()) {
                  alert(isEnglish ? "Please Enter Cluster ID" : "Por favor ingrese Grupo ID");
                } else if (!fogNetModel.trim()) {
                  alert(isEnglish ? "Please Enter Model Name" : "Por favor ingrese Nombre del Modelo");
                } else if (
                  isNaN(parseFloat(waterCollected)) ||
                  waterCollected.split(".").length > 2
                ) {
                  alert("Please Enter a Valid Amount of Water Collected");
                } else if (dateIsValid(date) === true) {
                  if (waterCollected.slice(-1) === ".")
                    setWaterCollected(waterCollected + "0");
                  setEditable(false);
                  setShowConfirm(true);
                }
              } catch (err) {
                alert("Please complete all fields");
              }
            }}
          >
            <Text style={styles.buttonText}>{isEnglish ? "Submit" : "Enviar"}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.buttonText}>{isEnglish ? "Done" : "Completado"}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#261CA6',
    justifyContent: 'center'
  },
  inlineContainer: {
    marginLeft: 20,
    flexDirection: 'row',
    textAlign: 'left',
    alignItems: 'center',
    maxWidth: '89%'
  },
  confirmContainer: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#261CA6',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    borderRadius: 20,
    padding: 15
  },
  backButton: {
    borderRadius: 20,
    padding: 15,
    marginTop: 25,
    marginBottom: 140
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    padding: 20,
    color: '#FFFFFF'
  },
  buttonText: {
    fontSize: 20,
    color: '#261CA6'
  },
  promptText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF'
  },
  inputText: {
    fontSize: 20,
    color: '#FFFFFF'
  },
  fieldBox: {
    flex: 1,
    borderRadius: 20,
    marginVertical: 10,
    fontSize: 18,
    padding: 10,
    backgroundColor: "#FFFFFF"
  }
});

export default DataEntry;
