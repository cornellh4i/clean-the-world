import * as React from 'react'
import {StyleSheet, Text, Pressable, Alert} from 'react-native';
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
const CustomButton = () => {
return(
  <Pressable onPress={() => Alert.alert('Simple Button pressed!')} style={styles.button1}> 
    <Text>I'm a button!</Text>
  </Pressable>
)};

const styles = StyleSheet.create({
  button1: {
    borderRadius: 8,
    padding: 6,
    backgroundColor: '#f9f9f9',
    borderColor: '#f0f0f0',
  },
});

export default CustomButton;