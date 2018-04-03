import { StackNavigator } from 'react-navigation';
import GameScreen from './GameScreen';
import PlayerScreen from './PlayerScreen';
import TestScreen from './TestScreen';

export const RootStack = StackNavigator(
  {
    Game: {
      screen: GameScreen,
    },
    Player: {
      screen: PlayerScreen,
    },
    Test: {
      screen: TestScreen,
    }
  },
  {
    initialRouteName: 'Test',
  }
);