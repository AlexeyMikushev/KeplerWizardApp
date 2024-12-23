import React, {useRef} from 'react';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import {MainRoutes} from './routes';
import Header from '../components/organisms/Header';
import AboutYou from '../components/pages/AboutYou';
import EmailAddress from '../components/pages/EmailAddress';

const Stack = createStackNavigator();

export const useAppNavigation = () =>
  useNavigation<StackNavigationProp<Record<MainRoutes, undefined>>>();

const MainNavigator = () => {
  const progressBarScreens = useRef([
    MainRoutes.aboutYou,
    MainRoutes.email,
  ]).current;

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
          <Stack.Screen
            component={EmailAddress}
            name={MainRoutes.email}
            options={{
              header: () => (
                <Header
                  progressCount={progressBarScreens.indexOf(MainRoutes.email)}
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
