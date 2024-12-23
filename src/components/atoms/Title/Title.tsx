import React from 'react';
import {Text, TextProps} from 'react-native';
import {styles} from './styles';
const Title = ({children}: TextProps) => {
  return <Text style={styles.title}>{children}</Text>;
};
export default Title;
