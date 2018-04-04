import { StackNavigator } from 'react-navigation';
import GameScreen from './GameScreen';
import PlayerScreen from './PlayerScreen';
import TestScreen from './TestScreen';
import DragAndDropScreen from './DragAndDropScreen';
import MyDnD from './MyDnD';
import ScrollViewDND from './ScrollViewDND';

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
    },
    DragAndDrop: {
      screen: DragAndDropScreen,
    },
    ScrollViewDND: {
      screen: ScrollViewDND,
    }
  },
  {
    initialRouteName: 'ScrollViewDND',
  }
);