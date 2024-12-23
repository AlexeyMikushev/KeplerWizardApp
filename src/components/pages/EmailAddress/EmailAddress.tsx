import React, {useCallback, useEffect, useState} from 'react';

import {styles} from './styles';
import InputFormPage from '../../templates/InputFormPage';
import {MainRoutes} from '../../../navigation/routes';
import {useAppNavigation} from '../../../navigation/MainNavigator';
import {getEmailInfo, postEmail} from '../../../api/getQuestions';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import {IPageInfo} from '../../../api/dto';

const EmailAddress = () => {
  const [pageInfo, setPageInfo] = useState<Partial<IPageInfo>>({});
  const {navigate} = useAppNavigation();

  useEffect(() => {
    async function fetchData() {
      const info = await getEmailInfo();
      setPageInfo(info);
    }
    fetchData();
  }, []);

  const handleContinue = useCallback(
    async (text: string) => {
      await postEmail(text);
      navigate(MainRoutes.superpowersInfo);
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
};

export default React.memo(EmailAddress);
