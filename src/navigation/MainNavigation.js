/* import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';

import Home from '../screens/Home';
import Login from '../screens/Login';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

function MainNavigation(){ 
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={Home}
            >
                <Tab.Screen name="Inicio" component={Home} />
                <Tab.Screen name="Ajustes" component={Settings} />
                <Tab.Screen name="Perfil" component={Login} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation; */