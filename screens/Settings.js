import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Settings extends React.Component{
    render(){
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
});
