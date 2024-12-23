import React, {useCallback} from 'react';
import {View} from 'react-native';
import MultiSelectCard from '../../atoms/MultiSelectCard';
import {styles} from './styles';

type ButtonProps = {
  selectedValues: Array<string>;
  setSelectedValues: (selectedValues: Array<string>) => void;
  values?: Array<string>;
};
const MultiSelect = ({
  values,
  setSelectedValues,
  selectedValues,
}: ButtonProps) => {
  const selectValue = useCallback(
    (value?: string) => {
      if (value) {
        if (selectedValues.includes(value)) {
          setSelectedValues(selectedValues.filter(v => v !== value));
        } else {
          setSelectedValues([...selectedValues, value]);
        }
      }
    },
    [selectedValues, setSelectedValues],
  );
  return (
    <View style={styles.container}>
      {values?.map(value => {
        return (
          <MultiSelectCard
            key={value}
            handlePress={selectValue}
            isSelected={selectedValues.includes(value)}
            title={value}
          />
        );
      })}
    </View>
  );
};

export default React.memo(MultiSelect);
