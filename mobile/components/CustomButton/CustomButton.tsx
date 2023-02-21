import * as React from 'react'
import { StyleSheet, Text, Pressable, Alert } from 'react-native';
/** Component for a general button to be used all over the app 
 *  @param text is the text on the button 
 *  @param handleClick is the function that called when the button is clicked
 *  @param css is a css class that can be found in Button.css 
*/

/*
  TODO: Create a Button Component!
  The button has to follow the specs outlined above
  Below is a premade button without any props -- check out its syntax!
  Use the StyleSheet below to customize the button with classes.
*/
type CustomProps = {
  style?: {}
  text: string
};

const CustomButton = ({ style, text }: CustomProps) => {
  return (
    <Pressable onPress={() => Alert.alert('Simple button pressed!')} style={style}>
      <Text style={styles.baseText}>{text}</Text>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Verdana',
    fontSize: 25,
    color: '#ffffff'
  },
  // small: {
  //   borderRadius: 8,
  //   padding: 10,
  //   margin: 10,
  //   backgroundColor: '#f3aac0',
  //   borderColor: '#f0f0f0'
  // },
  // medium: {
  //   borderRadius: 24,
  //   padding: 30,
  //   margin: 10,
  //   backgroundColor: '#f3aac0',
  //   borderColor: '#f0f0f0'
  // },
  // large: {
  //   borderRadius: 72,
  //   padding: 90,
  //   margin: 10,
  //   backgroundColor: '#f3aac0',
  //   borderColor: '#f0f0f0'
  // },
});

export default CustomButton; styles;