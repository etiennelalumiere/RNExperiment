import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  Animated,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';

export default class ScrollViewDND extends Component {

  static navigationOptions = {
    title: 'ScrollView DnD'
  };

  constructor(props){
    super(props);

    this.state = {
      animation: new Animated.ValueXY(0),
      dragging: false
    };


    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        console.log('grant');
        this.setState({ dragging: true });
      },
      onPanResponderMove: (evt, gestureState) => {
        console.log('move');

        Animated.event([
          {
            dx: this.state.animation.x,
            dy: this.state.animation.y
          }
        ])(gestureState);
      },
      onPanResponderRelease: (evt, gestureState) => {
        console.log('release');

        Animated.spring(
          this.state.animation,
          {
            toValue:{ x:0, y:0 }
          }
        ).start(() => this.setState({ dragging: false }));
      }
    });
  }

  componentDidMount() {
    // will need to measure at the end of scrolling if it is inside a scrollview
    // setTimeout(() => {
    //     this.dropZone.measure((x, y, width, height, pageX, pageY) => {
    //       this._dropZoneMeasures = {x, y, width, height, pageX, pageY};
    //       console.log(this._dropZoneMeasures)
    //     })
    //   },
    //   100);
    //
    setTimeout(() => {
        this.animatedView.measure((x, y, width, height, pageX, pageY) => {
          this._animatedViewMeasures = {x, y, width, height, pageX, pageY};
          console.log(this._animatedViewMeasures)
        })
      },
      1000);

  }




  // renderDraggable = () => {
  //   const animatedStyles = {
  //     transform: this.state.animation.getTranslateTransform()
  //   };
  //
  //   return (
  //
  //     <Animated.View
  //       style={[styles.circle, animatedStyles]}
  //       {...this._panResponder.panHandlers}
  //
  //     >
  //       <View
  //         ref={view => this.animatedView = view}
  //         collapsable={false}
  //         style={{flex: 1, backgroundColor: 'red'}}
  //       >
  //         <Text style={styles.text}>Drag me!</Text>
  //       </View>
  //     </Animated.View>
  //
  //   );
  // };

  render() {
    const animatedStyles = {
      transform: this.state.animation.getTranslateTransform()
    };

    return (
      <View style={styles.mainContainer}>
        {this.state.dragging &&
          <Animated.View style={[styles.draggableOverlay, animatedStyles]}/>
        }

        <View style={styles.topZone}>
          <View style={styles.dropZone}>
            <Text>Drop zone</Text>
          </View>
        </View>

        <View style={styles.bottomZone}>
          <View style={styles.dropZone}>
            <DraggableCircle />
            <Text>Drop zone</Text>
          </View>
        </View>

            <Animated.View
              {...this._panResponder.panHandlers}
              style={[{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: 'blue',
                position: 'absolute',
                left: 0,
                top: 0,
                zIndex: 1,
              },
                animatedStyles]}
            >
              <View
                ref={view => this.animatedView = view}
                collapsable={false}
                style={{
                  width: 25,
                  height: 25,
                  backgroundColor: 'red'
                }}

              />
            </Animated.View>

      </View>
    );
  }
}












//----------------------------------------------------------------------------------------------------------------------
// DRAGGABLE CIRCLE

class DraggableCircle extends Component {

  constructor(props){
    super(props);

    this.state = {
      animation: new Animated.ValueXY(0),
    };
  }

  componentWillMount() {
    const { onGrantCallback, onReleaseCallback } = this.props;

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        console.log('grant');

        if (onGrantCallback) {
          this.animatedView.measure((x, y, width, height, pageX, pageY) => {
            const draggableMeasures = {x, y, width, height, pageX, pageY};
            onGrantCallback(evt, gestureState, draggableMeasures);
          });
        }
      },
      onPanResponderMove: (evt, gestureState) => {
        Animated.event([
          {
            dx: this.state.animation.x,
            dy: this.state.animation.y
          }
        ])(gestureState);
      },
      onPanResponderRelease: (evt, gestureState) => {
        console.log('release');
        Animated.spring(
          this.state.animation,
          {
            toValue:{ x:0, y:0 }
          }
        ).start(finished => {
          if (onReleaseCallback) {
            onReleaseCallback(evt, gestureState, finished);
          }
        });
      }
    });
  }

  render() {
    const animatedStyles = {
      transform: this.state.animation.getTranslateTransform()
    };

    return (
      <Animated.View
        {...this._panResponder.panHandlers}
        style={[styles.draggableContainer, animatedStyles]}
      >
        <View
          style={styles.innerContainer}
          ref={view => this.animatedView = view}
          collapsable={false}
        >
          <View style={styles.circle} />
        </View>
      </Animated.View>
    );
  }
}


//----------------------------------------------------------------------------------------------------------------------
// STYLES

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'lightgrey'
  },
  draggableContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1
  },
  innerContainer: {
    backgroundColor: 'red',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
  },
  draggableOverlay: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    backgroundColor: 'seagreen',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 2,
    opacity: 0.5
  },
  topZone: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomZone: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dropZone: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


//----------------------------------------------------------------------------------------------------------------------
// HELPER FUNCTIONS

centerChildWithinParent = (parent, child) => {
  return {
    left: (parent.width / 2) - (child.width / 2),
    top: (parent.height / 2) - (child.height / 2),
  };
};

getRectangleCenter = (rectangle) => {
  const { x, y, width, height } = rectangle;
  return {
    x: x + width / 2,
    y: y + height / 2
  };
};

isInLayout = (gesture, layout) => {
  return gesture.moveX > layout.x
    && gesture.moveX < layout.x + layout.width
    && gesture.moveY > layout.y
    && gesture.moveY < layout.y + layout.height;
};

isInsideRectangle = (point, rectangle) => {
  return point.x > rectangle.x
    && point.x < rectangle.x + rectangle.width
    && point.y > rectangle.y
    && point.y < rectangle.y + rectangle.height;
};

getTransformToAlignCenters = (source, destination) => {
  return {
    x: - (source.x + source.width / 2) + (destination.x + destination.width / 2),
    y: - (source.y + source.height / 2) + (destination.y + destination.height / 2)
  };
};

//https://www.questarter.com/q/how-can-bind-the-dragged-view-inside-scrollview-item-27_47566739.html