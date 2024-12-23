import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {ICON_CHECK} from '../../../constants/images';

type ButtonProps = {
  isSelected: boolean;
  handlePress: () => void;
};
const CheckBox = ({isSelected, handlePress}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.checkBox}>
        {isSelected ? <ICON_CHECK width={32} height={32} /> : null}
      </View>
    </TouchableOpacity>
  );
};

export default CheckBox;
