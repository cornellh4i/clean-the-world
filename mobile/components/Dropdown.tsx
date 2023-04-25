import { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
function DropdownComponent() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Day', value: 'd' },
    { label: 'Month', value: 'm' },
    { label: 'Year', value: 'y' }
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
}
export default DropdownComponent;
