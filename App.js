import * as React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createSwitchNavigator
} from 'react-navigation';

import * as Font from 'expo-font';
import HomePage from './pages/HomePage';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import store from "./redux/store";

let fontLoaded = false;

const HomeStack = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: ({navigation}) =>  {
      return {
        headerStyle: {
          backgroundColor: '#ffcb37',
          elevation:0
        },
        headerTitleStyle: {
          // fontFamily: (fontLoaded) ? 'varela-round' : 'roboto'
        },
        // headerLeft: ({ focused, tinColor }) => (
        //   <MenuButton navigation={navigation}></MenuButton>
        // ),
        headerTintColor: 'black',
        title: 'goPamoja!'
      }
    }
  }
});

//For React Navigation Version 2+
//export default App;
//For React Navigation Version 3+
let Navigation = createAppContainer(HomeStack);

export default function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}
