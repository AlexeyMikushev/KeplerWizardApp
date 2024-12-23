import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {styles} from './styles';
import {getAboutYouInfo, postName} from '../../../api/getQuestions';
import InputFormPage from '../../templates/InputFormPage';
import {useAppNavigation} from '../../../navigation/MainNavigator';
import {MainRoutes} from '../../../navigation/routes';
import {IPageInfo} from '../../../api/dto';

function AboutYou(): React.JSX.Element {
  const [pageInfo, setPageInfo] = useState<Partial<IPageInfo>>({});
  const {navigate} = useAppNavigation();

  useEffect(() => {
    async function fetchData() {
      const info = await getAboutYouInfo();
      setPageInfo(info);
    }
    fetchData();
  }, []);

  const handleContinue = useCallback(
    async (text: string) => {
      await postName(text);
      navigate(MainRoutes.email);
    },
    [navigate],
  );

  return (
    <SafeAreaView style={styles.saveArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <InputFormPage pageInfo={pageInfo} handleContinue={handleContinue} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default AboutYou;
