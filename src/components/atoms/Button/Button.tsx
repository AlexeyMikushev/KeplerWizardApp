import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

type ButtonProps = {
  onPress: () => void;
  title: string;
};
const Button = ({onPress, title}: ButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
