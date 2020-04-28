import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Followers from './Followers';
import Followings from './Followings';
const Tab = createMaterialTopTabNavigator();

const FollowTopNav=()=>(
    <Tab.Navigator
      initialRouteName="Followers"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="Followers"
        component={Followers}
        options={{ tabBarLabel: 'Followers' }}
      />
      <Tab.Screen
        name="Followings"
        component={Followings}
        options={{ tabBarLabel: 'Followings' }}
      />
    </Tab.Navigator>
  
);
export default FollowTopNav;