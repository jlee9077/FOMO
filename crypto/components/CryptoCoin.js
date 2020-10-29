import React, { Component } from 'react';
import { Card, CardItem, Left, Right, Body, Text, Thumbnail } from 'native-base';

class CryptoCoin extends Component {
  render() {
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
          <Text>Chart Placeholder</Text>
        </CardItem>
        <CardItem footer>
          <Left>
            <Text>5%</Text>
          </Left>
          <Body />
          <Right>
            <Text>$13,275.00</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default CryptoCoin
