import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {styles} from './styles';
import {
  getFavoriteNumberInfo,
  postFavoriteNumber,
} from '../../../api/getQuestions';
import InputFormPage from '../../templates/InputFormPage';
import {useAppNavigation} from '../../../navigation/MainNavigator';
import {MainRoutes} from '../../../navigation/routes';
import {IPageInfo} from '../../../api/dto';

function FavoriteNumber(): React.JSX.Element {
  const [pageInfo, setPageInfo] = useState<Partial<IPageInfo>>({});
  const {navigate} = useAppNavigation();

  useEffect(() => {
    async function fetchData() {
      const info = await getFavoriteNumberInfo();
      setPageInfo(info);
    }
    fetchData();
  }, []);

  const handleContinue = useCallback(
    async (number: string) => {
      await postFavoriteNumber(number);
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

export default FavoriteNumber;
