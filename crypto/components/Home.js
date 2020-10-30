import React from 'react'
import { StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native'
import { Header, Container, Content, Text, Button } from 'native-base'
import background from '../components/Background'

const Home = ({ navigation }) => {
    return (
      <Container style={styles.container}>
        <ImageBackground style={styles.image} source={{uri: background}}>
          <Content>
          <TouchableOpacity
            onPress={() => navigation.navigate('Cryptos')}
            style={styles.button}
          >
            <Image
              style={styles.icon}
              source= {{ uri: 'https://cryptoicons.org/api/icon/btc/128' }}
              />
          </TouchableOpacity>
          </Content>
        </ImageBackground>
      </Container>
    )
}

export default Home

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 'auto',
    width: '100%',
    resizeMode: 'contain',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 0,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: '50%'
  },
  icon: {
    height: 90,
    width: 90,
    alignSelf: 'center'
  }
})
