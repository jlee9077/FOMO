import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { Card, CardItem, Left, Right, Body, Text, Thumbnail } from 'native-base';

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
  // Sample response from binance api
  // https://github.com/binance-exchange/binance-official-api-docs/blob/master/rest-api.md#klinecandlestick-data
  // [
  //   [
  //     1499040000000,      // Open time
  //     "0.01634790",       // Open
  //     "0.80000000",       // High
  //     "0.01575800",       // Low
  //     "0.01577100",       // Close
  //     "148976.11427815",  // Volume
  //     1499644799999,      // Close time
  //     "2434.19055334",    // Quote asset volume
  //     308,                // Number of trades
  //     "1756.87402397",    // Taker buy base asset volume
  //     "28.46694368",      // Taker buy quote asset volume
  //     "17928899.62484339" // Ignore.
  //   ]
  // ]
  async componentDidMount() {
    const res = await fetch('https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=30m&limit=50')
    const json = await res.json()
    const trades = json.map(interval => parseFloat(interval[1]))
    const open = trades[0]
    const close = trades.slice(-1)[0]
    const percentage = (((close - open) / open) * 100)
  }

  render() {
    const { isLoading } = this.state
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'https://cryptoicons.org/api/icon/btc/128'}} />
            <Body>
              <Text>BTC/USDT</Text>
              <Text note>5m</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          {
            isLoading && <AppLoading />
          }
          {
            !isLoading && <Text>Chart Loading...</Text>
          }
          {/* <Text>Chart Placeholder</Text> */}
        </CardItem>
        {
          !isLoading &&
          <CardItem footer>
            <Left>
              <Text>5%</Text>
            </Left>
            <Body />
            <Right>
              <Text>$13,275.00</Text>
            </Right>
          </CardItem>
        }
      </Card>
    );
  }
}

export default CryptoCoin
