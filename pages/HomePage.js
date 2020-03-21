import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, ActivityIndicator, Text, View, StyleSheet} from 'react-native';
import TripList from '../components/TripList';
import { loadTrips } from "../redux/actions";
import { connect } from "react-redux";
import { CONFIG } from '../env.js';

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentWillMount() {
    if(this.props.origins == null || this.props.origins.length === 0) {
      fetch(CONFIG.api + '/agents/1/trips' , {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
      .then((response) => response.json())
      .then((response) => {
        if(response.err) {
          console.log(response.err);
        } else {
          this.props.loadTrips(response.trips);
        }

        this.setState({
          loading: false
        })
      })
      .catch((error) => {
        console.log(error)
      });
    } else {
      this.setState({
        loading: false
      })
    }
  }

  render() {
    if(this.state.loading) {
      return (
        <ActivityIndicator animating = {true} size="large" color="black" />
      )
    } else {
      return (
        <View style={styles.container}>
          <ScrollView>
            <TripList trips={this.props.trips} navigation={this.props.navigation}></TripList>
          </ScrollView>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  }
})

const mapStateToProps = (state) => {
  return {
    trips: state.trips.trips
  }
};

const mapDispatchToProps = {
  loadTrips: loadTrips
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
