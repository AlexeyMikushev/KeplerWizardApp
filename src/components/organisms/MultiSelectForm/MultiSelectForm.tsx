import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import Button from '../../atoms/Button';
import Title from '../../atoms/Title';
import MultiSelect from '../../molecules/MultiSelect';
import {styles} from './styles';
import {IPageInfoMultiselect} from '../../../api/dto';

type Props = {
  pageInfo: Partial<IPageInfoMultiselect>;
  handleContinue: (info: Array<string>) => void;
};

const MultiSelectForm = ({pageInfo, handleContinue}: Props) => {
  const [selectedValues, setSelectedValues] = useState<Array<string>>([]);
  const handlePress = useCallback(() => {
    handleContinue(selectedValues);
  }, [handleContinue, selectedValues]);
  return (
    <View style={styles.container}>
      <Title>{pageInfo?.title}</Title>
      <MultiSelect
        values={pageInfo?.options}
        selectedValues={selectedValues}
        setSelectedValues={setSelectedValues}
      />
      <Button title={pageInfo?.buttonText} onPress={handlePress} />
    </View>
  );
};

export default React.memo(MultiSelectForm);
