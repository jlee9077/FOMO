import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { AppLoading } from 'expo';
import { Card, CardItem, Left, Right, Body, Text, Thumbnail, View, Button } from 'native-base';
import { LineChart } from 'react-native-svg-charts'
import PropTypes from 'prop-types'

class CryptoCoin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      trades: [],
      price: null,
      percentage: null
    }
  }

  async componentDidMount() {
    const { name, quote, time } = this.props
    const res = await fetch(`https://api.binance.com/api/v1/klines?symbol=${name}${quote}&interval=${time}&limit=50`)
    const json = await res.json()
    const trades = json.map(interval => parseFloat(interval[1]))
    const open = trades[0]
    const close = trades.slice(-1)[0]
    const percentage = (((close - open) / open) * 100).toFixed(2)
    this.setState({
      isLoading: false,
      trades: trades,
      price: close,
      percentage: percentage
    })
  }

  priceColor() {
    const { percentage } = this.state
    if (parseFloat(percentage) < 0) {
      return styles.down
    }
    return styles.up
  }

  render() {
    const { isLoading, trades, price, percentage } = this.state
    const { name, quote, time } = this.props
    const style = this.priceColor()
    const ticker = name.toLowerCase()
    return (
      <Card style={styles.cardSetting}>
        <CardItem style={styles.background}>
          <Left>
            <Thumbnail source={{uri: `https://cryptoicons.org/api/icon/${ticker}/128`}} />
            <Body>
              <Text style={styles.text}>{name}/{quote}</Text>
              <Text note style={styles.text}>{time}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem style={styles.background}>
          {
            isLoading && <AppLoading />
          }
          {
            !isLoading &&
            <View style={styles.view}>
              <LineChart
                style={styles.chart}
                data={trades}
                svg={{ stroke: style.color}}
              />
            </View>
          }
        </CardItem>
        {
          !isLoading &&
          <CardItem footer style={styles.background}>
            <Left>
              <Text style={style}>{percentage}%</Text>
            </Left>
            <Body />
            <Right>
              <Text style={style}>${price.toLocaleString('en-us')}</Text>
            </Right>
          </CardItem>
        }
      </Card>

    );
  }
}

export default CryptoCoin

const styles = StyleSheet.create({
  view: {
    flex: 1,
    height: 75,
  },
  chart: {
    height: 75,
  },
  up: {
    color: '#2bdb1f'
  },
  down: {
    color: '#cf0c0c'
  },
  text: {
    color: '#FFFFFF'
  },
  border: {
    color: '#181818'
  },
  cardSetting: {
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: '#181818'
  },
  background: {
    backgroundColor: '#181818'
  }
})

CryptoCoin.propTypes = {
  name: PropTypes.string,
  quote: PropTypes.string,
  time: PropTypes.string
}
