import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {styles} from './styles';
import {
  getSuperpowersInfo,
  postSuperpowersInfo,
} from '../../../api/getQuestions';
import {useAppNavigation} from '../../../navigation/MainNavigator';
import {MainRoutes} from '../../../navigation/routes';
import {IPageInfoMultiselect} from '../../../api/dto';
import MultiSelectFormPage from '../../templates/MultiSelectFormPage';

function SuperpowersInfo(): React.JSX.Element {
  const [pageInfo, setPageInfo] = useState<Partial<IPageInfoMultiselect>>({});
  const {navigate} = useAppNavigation();

  useEffect(() => {
    async function fetchData() {
      const info = await getSuperpowersInfo();
      setPageInfo(info);
    }
    fetchData();
  }, []);

  const handleContinue = useCallback(
    async (superpowers: Array<string>) => {
      await postSuperpowersInfo(superpowers);
      navigate(MainRoutes.aboutYou);
    },
    [navigate],
  );

  return (
    <SafeAreaView style={styles.saveArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <MultiSelectFormPage
          pageInfo={pageInfo}
          handleContinue={handleContinue}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default SuperpowersInfo;
