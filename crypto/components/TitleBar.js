import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import { Header, Left, Body, Right, Title } from 'native-base'

const TitleBar = ({title}) => (
  <Header style={{ backgroundColor: '#181818' }}>
    <Left />
    <Body>
      <Text style={{ color: '#FFFFFF' }}>{title}</Text>
    </Body>
    <Right />
  </Header>
)


export default TitleBar

TitleBar.propTypes = {
  title: PropTypes.string
}
