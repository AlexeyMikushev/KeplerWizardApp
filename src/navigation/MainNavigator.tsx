import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {MainRoutes} from './routes';
import Home from '../components/pages/Home';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={MainRoutes.home}>
        <Stack.Group>
          <Stack.Screen component={Home} name={MainRoutes.home} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {MainNavigator};
