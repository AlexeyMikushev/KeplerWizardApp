import React from 'react';
import {View} from 'react-native';
import MultiSelectForm from '../../organisms/MultiSelectForm/MultiSelectForm';

import {styles} from './styles';
import {IPageInfoMultiselect} from '../../../api/dto';

type Props = {
  pageInfo: Partial<IPageInfoMultiselect>;
  handleContinue: (info: Array<string>) => void;
};

const MultiSelectFormPage = ({pageInfo, handleContinue}: Props) => {
  return (
    <View style={styles.container}>
      <MultiSelectForm pageInfo={pageInfo} handleContinue={handleContinue} />
    </View>
  );
};

export default MultiSelectFormPage;
