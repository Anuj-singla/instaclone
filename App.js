import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Search from './screens/Search';
import Home from './screens/Home';
import Notifications from './screens/Notifications';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Drawer from './screens/Drawer'
// import {createAppContainer} from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Homestack=createStackNavigator();
const Searchstack=createStackNavigator();
const Notificationsstack=createStackNavigator();
//import Hometab from './screens/Hometab'
const Homestackscreen=({navigation})=>(
  <Homestack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'rgb(56,56,56)',
    },
    headerTintColor:"rgba(245,245,245,0.75)",
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }}>
    <Homestack.Screen
      
      name='Home' component={Home} options={{title:'Instagram',
      headerRight:()=>(
        <Icon.Button name='ios-send' size={35} color='rgba(245,245,245,0.75)'
        backgroundColor='	rgb(56,56,56)' onPress={()=>{navigation.navigate("Send_messages")}}
        />
      ), headerLeft:()=>(
        <Icon.Button name='ios-camera' size={35} color='rgba(245,245,245,0.75)?'
        backgroundColor='	rgb(56,56,56)' onPress={()=>{navigation.openDrawer()}}
        />
      )}}
    />
  </Homestack.Navigator>
)
const Searchstackscreen=({navigation})=>(
  <Searchstack.Navigator screenOptions={{
    headerShown: false,
    headerStyle:{
      backgroundColor:'rgba(255,228,115, 0.8)',
    },
    headerTintColor:"#28292b",
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }}>
    <Searchstack.Screen
      name='Search' component={Search} options={{title:"Search"}}
    />
  </Searchstack.Navigator>
)
const Notificationsstackscreen=({navigation})=>(
  <Notificationsstack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'rgb(56,56,56)',
    },
    headerTintColor:"rgba(245,245,245,0.75)",
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }}>
    <Notificationsstack.Screen
      name='Notifications' component={Notifications} options={{title:"Notifications"}}
    />
  </Notificationsstack.Navigator>
)

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="rgba(245,245,245,9)"
      inactiveColor='rgba(245,245,245,0.75)'
      barStyle={{backgroundColor:'rgba(56,56,56,0.9)'}}
    >
      <Tab.Screen
        name="Home"
        component={Homestackscreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Search"
        component={Searchstackscreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notificationsstackscreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Drawer}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

