import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import Button from '../../atoms/Button';
import Title from '../../atoms/Title';
import InputField from '../../molecules/InputField';
import {IPageInfo} from '../../../api/dto';

type Props = {
  pageInfo: Partial<IPageInfo>;
  handleContinue: (text: string) => void;
};

const NameForm = ({pageInfo, handleContinue}: Props) => {
  const [text, onChangeText] = useState<string>('');
  const handlePress = useCallback(() => {
    handleContinue(text);
  }, [handleContinue, text]);
  return (
    <View style={styles.container}>
      <Title>{pageInfo?.title}</Title>
      <InputField
        text={text}
        onChangeText={onChangeText}
        label={pageInfo?.inputLabel}
        placeholder={pageInfo?.inputPlaceholder}
        keyboardType={pageInfo?.keyboardType}
      />
      <Button title={pageInfo?.buttonText} onPress={handlePress} />
    </View>
  );
};

export default React.memo(NameForm);
