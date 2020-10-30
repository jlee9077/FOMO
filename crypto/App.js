import React, { Component } from 'react'
import 'react-native-gesture-handler'
import Home from './components/Home'
import CoinList from './components/CoinList'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            barStyle={{backgroundColor: '#000000'}}
          />
          <Stack.Screen
            name="Cryptos"
            component={CoinList}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
