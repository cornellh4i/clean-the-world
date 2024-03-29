import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
//@ts-ignore
import DatePicker from "react-native-datepicker";
import { LogBox } from "react-native";
import { Screen } from '../components/Screen';

LogBox.ignoreAllLogs(true);

interface Props {
  setUpFirstName: React.Dispatch<React.SetStateAction<string>>;
  upFirstName: string;
  setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
  isEnglish: boolean;
}


const Profile = ({setUpFirstName, upFirstName, isEnglish, setIsEnglish} : Props) => {
  const [firstName, setFirstName] = useState("Adriana");
  
  const [lastName, setLastName] = useState("Sanchez");
  const [clusterID, setClusterID] = useState("734");

  const [editable, setEditable] = useState(false);
  const [date, setDate] = useState("09/10/2021");

  const currDate = new Date();
  const month =
    (currDate.getMonth() + 1 < 10 ? "0" : "") + (currDate.getMonth() + 1);
  const day = (currDate.getDate() < 10 ? "0" : "") + currDate.getDate();
  const year = currDate.getFullYear();
  const today = day.toString() + "-" + month.toString() + "-" + year.toString();

  return (
    <Screen isEnglish={isEnglish} setIsEnglish={setIsEnglish}>
      <View style={styles.page}>
        <View style={styles.spaceContainer}>
          <View>
            <Text style={styles.headerText}>{isEnglish ? "User Profile Information" : "Información de Perfil"}</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.rowContainer}>
              <View style={styles.boxContainer}>
                <Text style={styles.promptText}>{isEnglish ? "First Name" : "Nombre"}</Text>
              </View>
              <View style={styles.boxContainer}>
                <TextInput
                  value={editable ? firstName : upFirstName}
                  autoFocus
                  editable={editable}
                  onChangeText={(firstName) => {setFirstName(firstName); console.log(firstName)}}
                  style={editable ? styles.fieldBox : styles.uneditable}
                />
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.boxContainer}>
                <Text style={styles.promptText}>{isEnglish ? "Last Name" : "Apellido"}</Text>
              </View>
              <View style={styles.boxContainer}>
                <TextInput
                  value={lastName}
                  autoFocus
                  editable={editable}
                  onChangeText={(lastName) => setLastName(lastName)}
                  style={editable ? styles.fieldBox : styles.uneditable}
                />
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.boxContainer}>
                <Text style={styles.promptText}>{isEnglish ? "Date of Birth" : "Fecha de nacimiento"}</Text>
                <Text style={styles.subtext}>dd/mm/yyyy</Text>
              </View>
              <View style={styles.boxContainer}>
                {!editable ? (
                  <TextInput
                    value={date}
                    style={editable ? styles.fieldBox : styles.uneditable}
                    editable={false}
                  />
                ) : (
                  <SafeAreaView>
                    <View>
                      <DatePicker
                        date={date}
                        selected={date}
                        mode="date"
                        placeholder="select date"
                        format="DD/MM/YYYY"
                        minDate="01-01-1900"
                        maxDate={today}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                          dateIcon: {
                            position: "absolute",
                            right: -5,
                            top: 4,
                            marginLeft: 0,
                          },
                          dateInput: {
                            borderColor: "white",
                            alignItems: "flex-start",
                            borderWidth: 0,
                            borderBottomWidth: 1,
                          },
                          placeholderText: {
                            fontSize: 17,
                            color: "white",
                          },
                          dateText: {
                            fontSize: 17,
                            color: "white",
                          },
                        }}
                        onDateChange={(date: any) => {
                          setDate(date);
                        }}
                      />
                    </View>
                  </SafeAreaView>
                )}
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.boxContainer}>
                <Text style={styles.promptText}>{isEnglish ? "Cluster ID #" : "Grupo ID #"}</Text>
              </View>
              <View style={styles.boxContainer}>
                <TextInput
                  value={clusterID}
                  autoFocus
                  editable={editable}
                  onChangeText={(clusterID) => setClusterID(clusterID)}
                  style={editable ? styles.fieldBox : styles.uneditable}
                />
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => {
                if (editable) {
                  setUpFirstName(firstName);
                  console.log(firstName);
                }
                else {
                  setFirstName(upFirstName);
                }
                setEditable(!editable);
              }}
            >
              <Text style={styles.buttonText}>
                {editable ? (isEnglish ? "Save Changes" : "Guardar cambios") : (isEnglish ? "Edit Information" : "Editar información")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#261CA6",
    height: "100%",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#261CA6",
    justifyContent: "center",
    flexDirection: "column",
    marginVertical: 20,
  },
  spaceContainer: {
    flexDirection: "column",
    backgroundColor: "#261CA6",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  buttonContainer: {
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: 10,
    height: 60,
  },
  boxContainer: {
    justifyContent: "center",
    width: "50%",
  },
  saveButton: {
    alignItems: "center",
    borderRadius: 16,
    padding: 16,
    width: 290,
    textAlign: "center",
    textAlignVertical: "center",
    backgroundColor: "#ffffff",
  },
  headerText: {
    // fontFamily: "ui-sans-serif",
    fontWeight: "600",
    color: "#ffffff",
    fontSize: 24,
    marginHorizontal: 10,
  },
  buttonText: {
    // fontFamily: "ui-sans-serif",
    fontSize: 20,
    color: "#261CA6",
  },
  promptText: {
    // fontFamily: "ui-sans-serif",
    fontWeight: "600",
    fontSize: 20,
    color: "#ffffff",
  },
  fieldBox: {
    marginVertical: 10,
    fontSize: 18,
    padding: 8,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  uneditable: {
    marginVertical: 10,
    fontSize: 18,
    padding: 8,
    backgroundColor: "#261CA6",
    color: "#ffffff",
  },
  subtext: {
    // fontFamily: "ui-sans-serif",
    color: "#ffffff",
  },
});

export default Profile;
