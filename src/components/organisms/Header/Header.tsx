import React from 'react';
import {SafeAreaView} from 'react-native';
import ProgressBar from '../../atoms/ProgressBar';
import {styles} from './styles';

type Props = {
  progressBarMax: number;
  progressCount: number;
};

const Header = ({progressCount, progressBarMax}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ProgressBar
        progressBarMax={progressBarMax}
        progressCount={progressCount}
      />
    </SafeAreaView>
  );
};

export default React.memo(Header);
