import React from 'react';
import { StyleSheet, Text, View,TextInput,ScrollView ,Image,TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-elements';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
export default class Home extends React.Component{
    render(){
  return (
    <ScrollView style={styles.container}>
       <View style={{marginVertical:15,flexDirection:'row'}}>
         <View style={{marginRight:8}}>
               <Avatar
               size={60}
             rounded
             //onEditPress
             //onPress
             source={{
             uri:'data:image/png;base64,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',
            }}
                />
                
             <Text style={styles.storyname}>NAME</Text>
          </View>
         <View style={{marginHorizontal:8}}>
              <Avatar
               size={60}
             rounded
             //onEditPress
             //onPress
             
             source={{
             uri:'data:image/jpeg;base64,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',
            }}
                />
                <Text style={styles.storyname}>friend1</Text>
                </View>
                <View style={{marginHorizontal:8}}>
              <Avatar
               size={60}
             rounded
             //onEditPress
             //onPress
             
             source={{
             uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9FbkMigEfD0TnWQGSX2fSs5BsQojaipLCc9_3tw-9SFvM37cu&usqp=CAU',
            }}
                />
                <Text style={styles.storyname}>friend2</Text>
                </View>
                <View style={{marginHorizontal:8}}>
              <Avatar
               size={60}
             rounded
             //onEditPress
             //onPress
             
             source={{
             uri:'data:image/png;base64,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',
            }}
                />
                <Text style={styles.storyname}>friend3</Text>
                </View>
       </View>
     <View style={styles.postcontainer}>
       <View style={{marginHorizontal:8,flexDirection:'row',marginTop:5}}>
              <Avatar
               size={40}
             rounded
             //onEditPress
             //onPress
             
             source={{
             uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9FbkMigEfD0TnWQGSX2fSs5BsQojaipLCc9_3tw-9SFvM37cu&usqp=CAU',
            }}
                />
                <Text style={styles.postownername}>friend2</Text>
                </View>
                <Image 
                          style={styles.post}
                         source={{uri:'data:image/jpeg;base64,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'}}
                  />
              <View style={{flexDirection:'row'}}>
                    <View>
                  <TouchableOpacity style={styles.likebutton}>
                      <View >
                           <MaterialCommunityIcons name="heart-outline" color={'rgba(245,245,245,0.6)'} size={27} />
                           
                       </View>
                   </TouchableOpacity>
                   <Text style={styles.liketext}>10 Likes</Text>
                   </View>
                   <TouchableOpacity style={styles.likebutton}>
                      <View >
                           <MaterialCommunityIcons name="comment-outline" color={'rgba(245,245,245,0.6)'} size={27} />
                       </View>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.likebutton}>
                      <View >
                           <MaterialCommunityIcons name="share-outline" color={'rgba(245,245,245,0.6)'} size={27} />
                       </View>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.savebutton}>
                      <View >
                           <MaterialCommunityIcons name="bookmark-outline" color={'rgba(245,245,245,0.6)'} size={30} />
                       </View>
                   </TouchableOpacity>
               </View>
               <TextInput
                     style={styles.commentbox}
                     placeholder="Add a comment.."
                    // onChangeText={text => setText(text)}
                    // defaultValue={text}
                 />
        </View>

           
    </ScrollView>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(8,8,8,0.95)',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  post:{
    height:330,
    width:360,
    marginVertical:10
  },
  likebutton:{
    marginHorizontal:10,
  },
  savebutton:{
    marginLeft:180
  },
  liketext:{
    color:'rgba(245,245,245,0.6)',
    fontWeight:'bold',
    marginVertical:5,
    
  },
  storyname:{
    color:'rgba(245,245,245,0.75)',
    marginVertical:3,
    marginLeft:13,
    fontSize:12
  },
  postownername:{
    color:'rgba(245,245,245,0.75)',
    marginVertical:2,
    marginLeft:13,
    fontSize:15,
    fontWeight:'bold',
    marginVertical:8
  },
    postcontainer:{
      borderTopWidth:0.17,
      borderBottomWidth:0.17,
      borderColor:'rgba(245,245,245,0.15)'
    },
    commentbox:{
      height: 40,
      color:"rgba(245,245,245,0.6)"
    },
  }
);