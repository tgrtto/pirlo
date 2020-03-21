import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
import TripListItem from './TripListItem';

export default class TripList extends Component {
  constructor(props){
    super(props);
  }

  _keyExtractor = (item, index) => {
    return JSON.stringify(item.id)
  };

  _renderItem = ({item}) => {
    return (
      <TripListItem
        navigation={this.props.navigation}
        id={item.id}
        name={item.name}
      />
  )};

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.trips}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   flexDirection: 'column'
 }
})
