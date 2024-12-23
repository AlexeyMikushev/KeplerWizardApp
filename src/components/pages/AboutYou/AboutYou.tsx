import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {styles} from './styles';
import AboutYouPage from '../../templates/AboutYouPage';

function AboutYou(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.saveArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <AboutYouPage />
      </ScrollView>
    </SafeAreaView>
  );
}

export default AboutYou;
