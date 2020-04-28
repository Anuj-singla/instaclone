import React from 'react';
import { StyleSheet, Text, View ,Button,TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
 export default class Profile extends React.Component{
    render(){
  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
     <View style={{flexDirection:'row'}}>
       <View style={{marginVertical:15}}>
               <Avatar
               size={85}
             rounded
             showEditButton='true'
             //onEditPress
             //onPress
             source={{
             uri:'data:image/png;base64,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',
            }}
                />
                <Text style={{color:'rgba(245,245,245,0.75)',marginVertical:10}}>FULL NAME</Text>
       </View>
       <View>
         <TouchableOpacity style={styles.button}>
           <View style={{justifyContent:'center',alignItems:'center'}}>
         <Text style={{color:'rgba(245,245,245,0.75)',fontWeight:'bold',fontSize:15}}>0</Text>
         </View>
           <Text style={{color:'rgba(245,245,245,0.75)',fontSize:15}}>Posts</Text>
         </TouchableOpacity>
       </View>
       <View>
         <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Followers")}}>
         <View style={{justifyContent:'center',alignItems:'center'}}>
         <Text style={{color:'rgba(245,245,245,0.75)',fontWeight:'bold',fontSize:15}}>234</Text>
         </View>
           <Text style={{color:'rgba(245,245,245,0.75)',fontSize:15}}>Followers</Text>
         </TouchableOpacity>
       </View>
       <View>
         <TouchableOpacity style={styles.button} onPress={()=>{this.props.navigation.navigate("Followings")}}>
         <View style={{justifyContent:'center',alignItems:'center'}}>
         <Text style={{color:'rgba(245,245,245,0.75)',fontWeight:'bold',fontSize:15}}>156</Text>
         </View>
           <Text style={{color:'rgba(245,245,245,0.75)',fontSize:15}}>Following</Text>
         </TouchableOpacity>
       </View>

      </View>
       <TouchableOpacity style={styles.editbutton}>
         <Text style={{color:'rgba(245,245,245,0.75)'}}>Edit Profile</Text>
       </TouchableOpacity>
       <View style={{marginVertical:15}}>
       <TouchableOpacity style={styles.addfavstory}>
         <View style={{justifyContent:'center',alignItems:'center',marginBottom:40}}>
         <Text style={{color:'rgba(245,245,245,0.75)',fontSize:30}}>+</Text>
         </View>
       </TouchableOpacity>
       <Text style={{color:'rgba(245,245,245,0.75)',marginVertical:2,marginLeft:17}}>New</Text>
          </View>
      </View>
      <View style={{flex:1}}>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={styles.postcontainer} >
        <View style={{justifyContent:'center',alignItems:'center'}}>
        < Icon 
        name={'md-grid'} 
        size={37} 
        color='rgba(245,245,245,0.6)' />
         </View>
       </TouchableOpacity>
       <TouchableOpacity style={styles.tagpostcontainer}>
       <View style={{justifyContent:'center',alignItems:'center'}}>
       <MaterialCommunityIcons name="clipboard-account-outline" color={'rgba(245,245,245,0.6)'} size={33} />
         </View>
       </TouchableOpacity>
      </View>
      </View>
      </View>
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(8,8,8,0.95)',
    alignItems: 'center',
    justifyContent: 'center',
  },
 button:{
  //backgroundColor: "rgba(8,8,8,0.95)",
  padding: 15,
  marginVertical:30,
  marginHorizontal:1
 },
 editbutton:{
   justifyContent:'center',
   alignItems:'center',
   borderColor:'rgba(245,245,245,0.75)',
   borderWidth:1,
   padding:6,
   borderRadius:5
 },
 addfavstory:{
   width:65,
   height:65,
   padding:20,
   borderWidth:2,
   borderRadius:50,
   borderColor:'rgba(245,245,245,0.75)'
 },
 postcontainer:{
  padding: 15,
  marginVertical:10,
  //marginHorizontal:1,
  width:185,
  borderTopWidth:0.17,
  borderBottomWidth:0.17,
  borderTopColor:"rgba(245,245,245,0.15)",
  borderBottomColor:'rgba(245,245,245,0.15)',
  borderRightColor:'rgba(8,8,8,0.95)'
  
 },
 tagpostcontainer:{
  padding: 15,
  marginVertical:10,
  //marginHorizontal:1,
  width:185,
  borderTopWidth:0.17,
  borderBottomWidth:0.17,
  borderTopColor:"rgba(245,245,245,0.15)",
  borderBottomColor:'rgba(245,245,245,0.15)',
  borderLeftColor:'rgba(8,8,8,0.95)',
  // backgroundColor:'rgba(8,8,8,0.1)'
 },
});
