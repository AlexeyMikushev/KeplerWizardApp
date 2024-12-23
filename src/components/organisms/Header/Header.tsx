import React from 'react';
import {View} from 'react-native';
import ProgressBar from '../../atoms/ProgressBar';
import {styles} from './styles';

type Props = {
  progressBarMax: number;
  progressCount: number;
};

const Header = ({progressCount, progressBarMax}: Props) => {
  return (
    <View style={styles.container}>
      <ProgressBar
        progressBarMax={progressBarMax}
        progressCount={progressCount}
      />
    </View>
  );
};

export default React.memo(Header);
