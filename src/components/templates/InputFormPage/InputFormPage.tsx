import React from 'react';
import {View} from 'react-native';
import InputForm from '../../organisms/InputForm';

import {styles} from './styles';
import {IPageInfo} from '../../../api/dto';

type Props = {
  pageInfo: Partial<IPageInfo>;
  handleContinue: (text: string) => void;
};

const InputFormPage = ({pageInfo, handleContinue}: Props) => {
  return (
    <View style={styles.container}>
      <InputForm handleContinue={handleContinue} pageInfo={pageInfo} />
    </View>
  );
};

export default InputFormPage;
