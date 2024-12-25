import React from 'react';
import {KeyboardType, TextInput as RNTextInput, View} from 'react-native';
import {styles} from './styles';

interface Props {
  onChangeText: (value: string) => void;
  value: string;
  placeholder?: string;
  keyboardType?: KeyboardType;
}

const TextInput = ({value, onChangeText, placeholder, keyboardType}: Props) => {
  const handleChange = (text: string) => {
    let modifiedText = text;
    if (keyboardType === 'numeric') {
      modifiedText = text.replace(/[^0-9]/g, '');
    }
    onChangeText(modifiedText);
  };
  return (
    <View style={styles.container}>
      <RNTextInput
        value={value}
        placeholder={placeholder}
        onChangeText={handleChange}
        keyboardType={keyboardType}
        style={styles.input}
      />
    </View>
  );
};

export default React.memo(TextInput);
