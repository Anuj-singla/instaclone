import React from 'react';
import { StyleSheet, Text, View,Button,FlatList,SafeAreaView,TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';
const DATA = [
  {
    dp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9FbkMigEfD0TnWQGSX2fSs5BsQojaipLCc9_3tw-9SFvM37cu&usqp=CAU',
    name: 'Sahil',
    profileName:'icon_Sahil',
  },
  {
    dp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9FbkMigEfD0TnWQGSX2fSs5BsQojaipLCc9_3tw-9SFvM37cu&usqp=CAU',
    name: 'Anuj',
    profileName:'Juna_singla',
  },
  {
    dp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9FbkMigEfD0TnWQGSX2fSs5BsQojaipLCc9_3tw-9SFvM37cu&usqp=CAU',
    name: 'Chandraprakash',
    profileName:'cp',
  },
];
function Item({ title,dp,name }) {
  return (
    <View style={styles.followcontainer}>
      <View style={styles.dp}>
       <Avatar
               size={60}
             rounded
             source={
             {
               uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9FbkMigEfD0TnWQGSX2fSs5BsQojaipLCc9_3tw-9SFvM37cu&usqp=CAU'
             }
           }
                />
      </View>          
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
    </View>
  );
}

export default class Followers extends React.Component{
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

    render(){
      const { search } = this.state;

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        placeholder="Search"
        onChangeText={this.updateSearch}
        value={search}
        
      />
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.profileName} dp={item.dp} name={item.name} />}
        keyExtractor={item => item.profileName}
      />
    </SafeAreaView>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(8,8,8,0.95)',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
   // backgroundColor: '#f9c2ff',
    // padding: 10,
    marginVertical: 12,
     marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
    color:'rgba(245,245,245,0.75)'
  },
  followcontainer:{
    flexDirection:'row',
    marginVertical:5,
    marginLeft:4
  },
  dp:{

  },
name:{
  fontSize: 15,
    color:'rgba(245,245,245,0.5)'
},

});