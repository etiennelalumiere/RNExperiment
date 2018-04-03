import { StackNavigator } from 'react-navigation';
import GameScreen from './GameScreen';
import PlayerScreen from './PlayerScreen';
import TestScreen from './TestScreen';
import DragAndDropScreen from './DragAndDropScreen';
import MyDnD from './MyDnD';

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
    MyDnD: {
      screen: MyDnD,
    }
  },
  {
    initialRouteName: 'MyDnD',
  }
);