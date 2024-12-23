import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import Button from '../../atoms/Button';
import Title from '../../atoms/Title';
import InputField from '../../molecules/InputField';

type Props = {
  handleContinue: (text: string) => void;
};

const NameForm = ({handleContinue}: Props) => {
  const [text, onChangeText] = useState<string>('');
  const handlePress = useCallback(() => {
    handleContinue(text);
  }, [handleContinue, text]);
  return (
    <View style={styles.container}>
      <Title>{'Tell us about yourself'}</Title>
      <InputField
        text={text}
        onChangeText={onChangeText}
        label="What your name?"
        placeholder="Enter your name"
      />
      <Button title="Continue" onPress={handlePress} />
    </View>
  );
};

export default React.memo(NameForm);
