import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Player from './Player'
import AddPlayer from './AddPlayer'

export default class PlayerList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      players: [],
    };
  }

  addPlayer() {

  }

  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Player name={'Etienne'} source={require('./assets/images/P_20180325_141424.jpg')}/>
        <Player name={'Alexis'} source={require('./assets/images/P_20180325_141449_BF.jpg')}/>
        <Player name={'Simon'} source={require('./assets/images/P_20180325_141431.jpg')}/>
        <Player name={'Etienne'} source={require('./assets/images/P_20180325_141424.jpg')}/>
        <Player name={'Alexis'} source={require('./assets/images/P_20180325_141449_BF.jpg')}/>
        <Player name={'Simon'} source={require('./assets/images/P_20180325_141431.jpg')}/>
        <AddPlayer/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
