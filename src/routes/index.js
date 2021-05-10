import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Bookmark from '../pages/Bookmark';
import Discovery from '../pages/Discovery';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import TopFoodie from '../pages/TopFoodie';

import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      initialRouteName='Discovery'
      tabBarOptions={{
        style: {
          backgroundColor: '#FFF',
          borderTopColor: 'transparent',
          height: 70
        },
        activeTintColor: '#F5C429',
        inactiveTintColor: '#BBB',
        tabStyle: {
          paddingBottom: 10,
          paddingTop: 10
        }
      }}
    >

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Discovery"
        component={Discovery}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="map-pin" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="bookmark" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Top Foodie"
        component={TopFoodie}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="award" size={size} color={color} />
          )
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}