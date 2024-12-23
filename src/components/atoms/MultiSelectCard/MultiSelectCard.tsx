import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import CheckBox from '../CheckBox/CheckBox';

type ButtonProps = {
  handlePress: (value?: string) => void;
  isSelected: boolean;
  title?: string;
};
const MultiSelectCard = ({handlePress, isSelected, title}: ButtonProps) => {
  const handlePressCard = useCallback(() => {
    handlePress(title);
  }, [handlePress, title]);

  return (
    <View style={styles.container}>
      <View style={styles.selectableCard}>
        <Text style={styles.buttonText}>{title}</Text>
        <CheckBox handlePress={handlePressCard} isSelected={isSelected} />
      </View>
    </View>
  );
};

export default MultiSelectCard;
