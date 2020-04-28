import * as React from 'react';
import { Button, View ,StyleSheet} from 'react-native';
import {Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper'
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from "react-native-elements";
export function Drawercontent(props){

    return(
      <View style={{flex:1,backgroundColor:"#28292b"}}>
       <DrawerContentScrollView >
         <View style={styles.drawercontent}>
           <View style={styles.userinfosection}>
               <View style={{flexDirection:'row',marginTop:15}}>
                   {/* <Avatar
                   source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRgZszCh4oCinPDR4-_u1EsQ8qY80D1i7VJ0y1bEplDP17KMc9W&usqp=CAU'}}
                   size={70}
                   rounded
                   showEditButton
                //    onEditPress
                //    onPress
                   
                   /> */}
                   <View style={{marginLeft:15}}>
                       <Title style={styles.title}>USER NAME</Title>
                       <Caption style={styles.caption}>USER ID</Caption>
                   </View>
               </View>
            {/* <View style={styles.row}>
             
            </View> */}
           </View>
           <Drawer.Section style={styles.drawersection}>
           <DrawerItem style={styles.singlebutton}
          icon={({color,size})=>(
            <Icon
            name='account-outline'
            color='#28292b'
            size={size}
            />
          )}
          label='Profile'
          onPress={()=>{props.navigation.navigate('Profile')}}
          />
          <DrawerItem style={styles.singlebutton}
          icon={({color,size})=>(
            <Icon
            name='settings'
            color='#28292b'
            size={size}
            />
          )}
          label='Settings'
          
          onPress={()=>{props.navigation.navigate('Settings')}}
          />
         
           </Drawer.Section>
         </View>
       </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomdrawersection}>
          <DrawerItem
          icon={({color,size})=>(
            <Icon
            name='exit-to-app'
            color='#28292b'
            size={size}
            />
          )}
          label='Sign out'
          onPress={()=>{}}
          />
        </Drawer.Section>
      </View> 
    )
  }

  
  const styles=StyleSheet.create({
    drawercontent:{
      flex:1
    },
    userinfosection:{
      paddingLeft:20,
    },
    title:{
      fontSize:16,
      marginTop:3,
      fontWeight:'bold',
      color:'rgba(245,245,245,0.75)'
    },
    caption:{
      fontSize:14,
      lineHeight:14,
      color:'rgba(245,245,245,0.75)'
    },
    row:{
      marginTop:20,
      flexDirection:'row',
      alignItems:'center',
  
    },
    section:{
      flexDirection:'row',
      alignItems:'center',
      marginRight:15,
    },
    paragraph:{
      fontWeight:'bold',
      marginRight:3,
    },
    singlebutton:{
        marginTop:8,
        backgroundColor:'rgba(245,245,245,0.55)',
        borderRadius:25
    },
    drawersection:{
      marginTop:15,
    //   backgroundColor:'rgba(255,228,115, 0.5)',
    //   borderRadius:25
            
    },
    bottomdrawersection:{
      marginBottom:15,
      borderTopColor:'rgba(245,245,245,0.9)',
      borderTopWidth:1,
      backgroundColor:'rgba(245,245,245,0.7)'
    },
    preferences:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingVertical:12,
      paddingHorizontal:16,
    },
  });
