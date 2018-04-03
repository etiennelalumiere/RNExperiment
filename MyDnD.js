import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  Animated,
  Dimensions,
  ScrollView
} from 'react-native';

export default class MyDnD extends Component {

  static navigationOptions = {
    title: 'My Drag and Drop'
  };

  constructor(props){
    super(props);

    this.state = {
      animation: new Animated.ValueXY(0),
    };


    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        const point = {
          x: gestureState.moveX,
          y: gestureState.moveY
        };

        const rectangle = {
          x: this._dropZoneMeasures.pageX,
          y: this._dropZoneMeasures.pageY,
          width: this._dropZoneMeasures.width,
          height: this._dropZoneMeasures.height
        };

        console.log(rectangle)

        if (isInsideRectangle(point, rectangle)) {
          Animated.spring(
            this.state.animation,
            {
              toValue:{ x:0, y:0 },
              friction: 7,
              tension: 100,
            }
          ).start();
        } else {
          Animated.spring(
            this.state.animation,
            {
              toValue:{ x: gestureState.dx, y: gestureState.dy },
              friction: 7,
              tension: 100,
            },
          ).start();
          // Animated.event([
          //   {
          //     dx: this.state.animation.x,
          //     dy: this.state.animation.y
          //   }
          // ])(gestureState);
        }

        console.log('move end')
      },
      onPanResponderRelease: (evt, gestureState) => {
        console.log('release start')
        Animated.spring(
          this.state.animation,
          {
            toValue:{ x:0, y:0 }
          }
        ).start();
      }
    });
  }

  componentDidMount() {
    // will need to measure at the end of scrolling if it is inside a scrollview
    setTimeout(() => {
        this.dropZone.measure((x, y, width, height, pageX, pageY) => {
          this._dropZoneMeasures = {x, y, width, height, pageX, pageY};
          console.log(this._dropZoneMeasures)
        })
      },
    100);

  }




  renderDraggable = () => {
    const animatedStyles = {
      transform: this.state.animation.getTranslateTransform()
    };

    return (
      <Animated.View
        style={[styles.circle, animatedStyles]}
        {...this._panResponder.panHandlers}
      >
        <Text style={styles.text}>Drag me!</Text>
      </Animated.View>
      // </View>
    );
  };

  render(){
    return (
      <View style={styles.mainContainer}>
        {/*<ScrollView horizontal={true} pagingEnabled={true}>*/}
        {/*<View style={{width: 100, height: 100, backgroundColor: 'red', margin: 10}}/>*/}
        {/*<View style={{width: 100, height: 100, backgroundColor: 'red', margin: 10}}/>*/}
        {/*<View style={{width: 100, height: 100, backgroundColor: 'red', margin: 10}}/>*/}
        {/*<View style={{width: 100, height: 100, backgroundColor: 'red', margin: 10}}/>*/}
        {/*<View style={{width: 100, height: 100, backgroundColor: 'red', margin: 10}}/>*/}
        {/*<View style={{width: 100, height: 100, backgroundColor: 'red', margin: 10}}/>*/}
        {/*</ScrollView>*/}
        <View
          style={styles.dropZone}
          ref={view => this.dropZone = view}
        >
          <Text style={styles.text}>Drop me here!</Text>
        </View>

        {this.renderDraggable()}
      </View>
    );
  }
}

getRectangleCenter = (rectangle) => {
  const { x, y, width, height } = rectangle;
  return {
    x: x + width / 2,
    y: y + height / 2
  };
};



isInLayout = (gesture, layout) => {
  console.log(gesture, layout)
  if (gesture.moveX > layout.x
    && gesture.moveX < layout.x + layout.width
    && gesture.moveY > layout.y
    && gesture.moveY < layout.y + layout.height) {
    return true;
  } else {
    return false;
  }
};

isInsideRectangle = (point, rectangle) => {
  if (point.x > rectangle.x
    && point.x < rectangle.x + rectangle.width
    && point.y > rectangle.y
    && point.y < rectangle.y + rectangle.height) {
    return true;
  } else {
    return false;
  }
};

let CIRCLE_RADIUS = 36;
let Window = Dimensions.get('window');
let styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  dropZone: {
    height: 300,
    width: 150,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    color: '#fff'
  },
  // draggableContainer: {
  //   position: 'absolute',
  //   top: Window.height / 2 - CIRCLE_RADIUS,
  //   left: Window.width / 2 - CIRCLE_RADIUS,
  // },
  circle: {
    backgroundColor: '#1abc9c',
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    justifyContent: 'center',
    alignItems: 'center'
  }
});