import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './styles';

type Props = {
  progressBarMax: number;
  progressCount: number;
};
const ProgressBar = ({progressCount, progressBarMax}: Props) => {
  const progressPercentage = (progressCount / progressBarMax) * 100;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View
          style={[styles.progressFill, {width: `${progressPercentage}%`}]}
        />
      </View>
    </SafeAreaView>
  );
};
export default ProgressBar;
