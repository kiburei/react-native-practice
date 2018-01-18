import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hi { this.props.name }, you is peng!</Text>
    );
  }
}

export default class Home extends Component {
  render() {
    let potato = {
      uri: 'http://www.moneysense.ca/wp-content/uploads/2016/12/hot-potato.jpeg'
    };
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Ayra' />
        <Greeting name='Kamar' />
        <Greeting name='Carol' />
        <Image source={potato} style={{width: 300, height: 310}}/>
      </View>
    );
  }
}
