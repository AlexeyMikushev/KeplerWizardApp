import React from 'react';
import {TextInput as RNTextInput, View, TextInputProps} from 'react-native';
import {styles} from './styles';

const TextInput = ({value, onChangeText, placeholder}: TextInputProps) => {
  return (
    <View style={styles.container}>
      <RNTextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

export default React.memo(TextInput);
