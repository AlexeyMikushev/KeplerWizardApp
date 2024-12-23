import React, {useCallback} from 'react';
import {View} from 'react-native';
import NameForm from '../../organisms/NameForm';

import {styles} from './styles';

type Props = {};

const AboutYouPage = ({}: Props) => {
  const handleContinue = useCallback((text: string) => {}, []);
  return (
    <View style={styles.container}>
      <NameForm handleContinue={handleContinue} />
    </View>
  );
};

export default React.memo(AboutYouPage);
