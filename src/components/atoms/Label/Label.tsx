import React from 'react';
import {Text, TextProps} from 'react-native';
import {styles} from './styles';
const Label = ({children}: TextProps) => {
  return <Text style={styles.label}>{children}</Text>;
};
export default Label;
