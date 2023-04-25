import { useState } from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
function DropdownComponent() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('null');
  const [items, setItems] = useState([
    { label: 'Day', value: 'd' },
    { label: 'Month', value: 'm' },
    { label: 'Year', value: 'y' }
  ]);

  return (
    <DropDownPicker

      containerStyle={styles.container}
      placeholder='Day'
      placeholderStyle={styles.placeholder}
      arrowIconStyle={styles.arrow}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 91,
    height: 32,
    left: 225,
    top: 184,
    backgroundColor: '#D9D9D9'
  },
  arrow: {
    backgroundColor: '#D9D9D9',

  },
  placeholder: {
    backgroundColor: '#D9D9D9',


  }
});
export default DropdownComponent;
