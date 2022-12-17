import { View, Text } from 'react-native'
import React from 'react'
import Beranda from './screen/Beranda'
import Destinasi from './screen/Destinasi'
import Informasi from './screen/Informasi'
import Lainnya from './screen/Lainnya'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Beranda') {
                iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Destinasi') {
                iconName = focused ? 'navigate-outline' : 'navigate-circle-outline';
            } else if (route.name === 'Informasi') {
                iconName = focused ? 'information-outline' : 'information-circle-outline';
            } else if (route.name === 'Lainnya') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#0085CC',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
        })}
    >
        <Tab.Screen name='Beranda' component={Beranda}/>
        <Tab.Screen name='Destinasi' component={Destinasi}/>
        <Tab.Screen name='Informasi' component={Informasi}/>
        <Tab.Screen name='Lainnya' component={Lainnya}/>
    </Tab.Navigator>
  )
}