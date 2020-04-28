import React from 'react';
import { StyleSheet, Text, View, ViewBase,SafeAreaView } from 'react-native';
import { SearchBar } from 'react-native-elements';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(8,8,8,0.95)',
  },
  container1:{
    marginTop:28
  }
});
export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      
      <View style={styles.container}>
        <SafeAreaView style={styles.container1}>
      <SearchBar
        placeholder="Search"
        onChangeText={this.updateSearch}
        value={search}
      />
      </SafeAreaView>
      </View>
      
    );
  }
}