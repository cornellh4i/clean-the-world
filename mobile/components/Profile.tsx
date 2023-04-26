import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
//@ts-ignore
import DatePicker from 'react-native-datepicker';

const Profile = () => {
  const [firstName, setFirstName] = useState("Adriana");
  const [lastName, setLastName] = useState("Sanchez");
  const [clusterID, setClusterID] = useState("734");

  const [editable, setEditable] = useState(false);
  const [date, setDate] = useState('09-10-2021');

  return (
    <View style={styles.spaceContainer}>
    <View style={styles.container}>
      <View style={styles.rowContainer}>
      <View style={styles.boxContainer}>
        <Text style={styles.promptText}>First Name</Text>
      </View>
      <View style={styles.boxContainer}>
      <TextInput
          value="Adriana"
          autoFocus
          editable={editable}
          onChangeText={firstName => setFirstName(firstName)}
          style={editable ? styles.fieldBox : styles.uneditable}
        />
      </View>
      </View>
      <View style={styles.rowContainer}>
      <View style={styles.boxContainer}>
      <Text style={styles.promptText}>Last Name</Text>
      </View>
      <View style={styles.boxContainer}>
      <TextInput
          value="Sanchez"
          autoFocus
          editable={editable}
          onChangeText={lastName => setLastName(lastName)}
          style={editable ? styles.fieldBox : styles.uneditable}
        />
        </View>
      </View>
      <View style={styles.rowContainer}>
      <View style={styles.boxContainer}>
      <Text style={styles.promptText}>Date of Birth</Text>
      </View>
      <View style={styles.boxContainer}>
      { !editable ? (
        <TextInput
          value={date}
          style={editable ? styles.fieldBox : styles.uneditable}
          editable={false}
        />
      ) : 
      (
        <SafeAreaView>
        <View>
            <DatePicker
            date={date}
            selected={date}
            mode="date"
            placeholder="select date"
            format="DD/MM/YYYY"
            minDate="01-01-1900"
            maxDate="01-01-2020"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                right: -5,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                borderColor : "gray",
                alignItems: "flex-start",
                borderWidth: 0,
                borderBottomWidth: 1,
              },
              placeholderText: {
                fontSize: 17,
                color: "gray"
              },
              dateText: {
                fontSize: 17,
              }
            }}
            onDateChange={(date : any) => {
              setDate(date);
            }}
              />
        </View>
      </SafeAreaView>
      )
      }
      </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.boxContainer}>
        <Text style={styles.promptText}>Cluster ID #</Text>
        </View>
        <View style={styles.boxContainer}>
         <TextInput
          value="734"
           autoFocus
           editable={editable}
           onChangeText={clusterID => setClusterID(clusterID)}
           style={editable ? styles.fieldBox : styles.uneditable}
         />
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.saveButton}
        onPress={async () => {
          setEditable(!editable);
        }}>
        <Text style={styles.buttonText}>{editable ? "Save Changes" : "Edit Information"}</Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>
)}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fef4e1',
    justifyContent: 'center',
    maxWidth: '89%',
    flexDirection: 'column'
  },
  textContainer: {
    // flex: 1,
    justifyContent: 'flex-start'
  },
  inputContainer: {
    // flex: 1,
    justifyContent: 'flex-start'
  },
  spaceContainer: {
    flexDirection: 'column'
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10
  },
  boxContainer: {
    justifyContent: 'center',
    // alignContent: 'flex-start'
  },
  saveButton: {
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    width: 200,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#9fd4a3'
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
    backgroundColor: "#ffffff"
  },
  uneditable: {
    marginVertical: 10,
    fontSize: 18,
    padding: 8,
    backgroundColor: "#fef4e1"
  }
});

export default Profile;