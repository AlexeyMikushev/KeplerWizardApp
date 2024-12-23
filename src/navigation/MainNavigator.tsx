import React, {useRef} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {MainRoutes} from './routes';
import Header from '../components/organisms/Header';
import AboutYou from '../components/pages/AboutYou';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const progressBarScreens = useRef([MainRoutes.aboutYou]).current;

  const progressBarMax = progressBarScreens.length;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={MainRoutes.aboutYou}>
        <Stack.Group>
          <Stack.Screen
            component={AboutYou}
            name={MainRoutes.aboutYou}
            options={{
              header: () => (
                <Header
                  progressCount={progressBarScreens.indexOf(
                    MainRoutes.aboutYou,
                  )}
                  progressBarMax={progressBarMax}
                />
              ),
              headerShown: true,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {MainNavigator};
