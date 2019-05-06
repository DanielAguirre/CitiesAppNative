import React from 'react';

import Cities from './Cities/Cities';
import City from './Cities/City';
import AddCity from './AddCity/AddCity';

import { colors } from './theme';

import { createBottomTabNavigation, createStackNavigation } from 'react-native';

const options = {
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors.primary
        },
        headerTintColor: '#fff'
    }
};

const CitiesNav = createdStackNavigator({
    Cities: {screen: Cities },
    City: { screen: City }
}, options)


const Tabs = createBottomTabNavigator({
    Cities: {screen: CitiesNav },
    City: { screen: AddCity }
});

export default Tabs;

