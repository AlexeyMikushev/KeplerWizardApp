import React from 'react';
import {View} from 'react-native';
import TextInput from '../../atoms/TextInput';
import {styles} from './styles';
import Label from '../../atoms/Label';

type Props = {
  text: string;
  onChangeText: (value: string) => void;
  label?: string;
  placeholder?: string;
};

const InputField = ({text, onChangeText, label, placeholder}: Props) => {
  return (
    <View style={styles.container}>
      <Label>{label}</Label>
      <TextInput
        value={text}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

export default React.memo(InputField);
