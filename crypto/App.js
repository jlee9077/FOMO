import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { Root, View, Container, Content, Text, Spinner } from 'native-base'
import TitleBar from './components/TitleBar'
import CryptoCoin from './components/CryptoCoin'
import * as Font from 'expo-font';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({ isLoading: false });
  }
  render() {
    const { isLoading } = this.state

    if (isLoading) {
      return <AppLoading />
    }
    return (
      <Root>
        <View style={styles.container}>
          <Container style={{ backgroundColor: '#000000' }}>
            <TitleBar title="Cryptocurrencies"/>
            <Content>
              <CryptoCoin
               name='BTC'
               quote='USDT'
               time='30m'
              />
              <CryptoCoin
               name='ETH'
               quote='USDT'
               time='30m'
              />
              <CryptoCoin
               name='XRP'
               quote='USDT'
               time='30m'
              />
              <CryptoCoin
               name='BCH'
               quote='USDT'
               time='30m'
              />
              <CryptoCoin
               name='LINK'
               quote='USDT'
               time='30m'
              />
            </Content>
          </Container>
        </View>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignSelf: 'stretch'
    // ...Platform.select({
    //   android: {
    //     marginTop: StatusBar.currentHeight
    //   }
    // })
  }
});
