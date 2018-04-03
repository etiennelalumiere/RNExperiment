import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Player from './Player';
import AddPlayer from './AddPlayer';

export default class GameScreen extends Component {
  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Player name={'Etienne'} source={require('./assets/images/P_20180325_141424.jpg')}/>
        <Player name={'Alexis'} source={require('./assets/images/P_20180325_141449_BF.jpg')}/>
        <Player name={'Simon'} source={require('./assets/images/P_20180325_141431.jpg')}/>
        <Player name={'OOOOOOOOOO'} source={require('./assets/images/P_20180325_141424.jpg')}/>
        <Player name={'Alexis'} source={require('./assets/images/P_20180325_141449_BF.jpg')}/>
        <Player name={'Simon'} source={require('./assets/images/P_20180325_141431.jpg')}/>
        <AddPlayer onPress={() => this.props.navigation.navigate('Player')}/>
      </ScrollView>
    );
  }
}