import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../Main';
import Product from '../Products';

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Main" component={Main} />
        <Screen name="Products" component={Product}/>

      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;

