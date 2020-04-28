import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {Drawercontent} from './Drawercontent';
import Profile from './Profile';
import Settings from './Settings';
import Followings from './Followings';
import Followers from './Followers';
import Posts from './Posts';
import Tags from './Tags';
import Send_messages from './Send_messages'
const Followersstack=createStackNavigator();
const Followingsstack=createStackNavigator();
const Settingsstack=createStackNavigator();
const Profilestack=createStackNavigator();


const Profilestackscreen=({navigation})=>(
    <Profilestack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'rgb(56,56,56)',
      },
      headerTintColor:"rgba(245,245,245,0.75)",
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}>
      <Profilestack.Screen
        name='Profile' component={Profile} options={{title:"User Name",
        headerRight:()=>(
          <Icon.Button name='md-menu' size={30} color='rgba(245,245,245,0.75)'
          backgroundColor='rgb(56,56,56)' onPress={()=>{navigation.openDrawer()}}
          />
        )}}
      />
    </Profilestack.Navigator>
  )
const Settingsstackscreen=({navigation})=>(
    <Settingsstack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'rgb(56,56,56)',
      },
      headerTintColor:"rgba(245,245,245,0.75)",
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}>
      <Settingsstack.Screen
        name='Settings' component={Settings} options={{title:"Settings",
        headerLeft:()=>(
          <Icon.Button name='md-arrow-round-back' size={30} color='rgba(245,245,245,0.75)'
          backgroundColor='rgb(56,56,56)' onPress={()=>{navigation.goBack()}}
          />
        )}}
      />
    </Settingsstack.Navigator>
  )
const Followersstackscreen=({navigation})=>(
    <Followersstack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'rgb(56,56,56)',
      },
      headerTintColor:"rgba(245,245,245,0.75)",
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}>
      <Followersstack.Screen
        name='Followers' component={Followers} options={{title:"Followers",
        headerLeft:()=>(
          <Icon.Button name='md-arrow-round-back' size={30} color='rgba(245,245,245,0.75)'
          backgroundColor='rgb(56,56,56)' onPress={()=>{navigation.goBack()}}
          />
        )
       }}
      />
    </Followersstack.Navigator>
  )

  const Followingsstackscreen=({navigation})=>(
    <Followingsstack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'rgb(56,56,56)',
      },
      headerTintColor:"rgba(245,245,245,0.75)",
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}>
      <Followingsstack.Screen
        name='Followings' component={Followings} options={{title:"Followings",
        headerLeft:()=>(
          <Icon.Button name='md-arrow-round-back' size={30} color='rgba(245,245,245,0.75)'
          backgroundColor='rgb(56,56,56)' onPress={()=>{navigation.goBack()}}
          />
        )
       }}
      />
    </Followingsstack.Navigator>
  )
const Drawer = createDrawerNavigator();
const Drawernavigation=()=>(
    <Drawer.Navigator drawerContent={props=><Drawercontent {...props}/>}
    initialRouteName={Profilestackscreen}
    drawerPosition= 'right'
    drawerType= "slide"
    >
      <Drawer.Screen
        name="Profile"
        component={Profilestackscreen}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
            <Drawer.Screen
        name="Settings"
        component={Settingsstackscreen}
        options={{
          tabBarLabel: 'Settings',
        }}
      />
      <Drawer.Screen
        name="Followers"
        component={Followersstackscreen}
        options={{
          tabBarLabel:'FollowTopNav',
        }}
      />
      <Drawer.Screen
        name="Followings"
        component={Followingsstackscreen}
        options={{
          tabBarLabel: 'Followings',
        }}
      />
      <Drawer.Screen
        name="Tags"
        component={Tags}
        options={{
          tabBarLabel: 'Tags',
        }}
      />
      <Drawer.Screen
        name="Posts"
        component={Posts}
        options={{
          tabBarLabel: 'Posts',
        }}
      />
      

    </Drawer.Navigator>

);
   export default Drawernavigation;