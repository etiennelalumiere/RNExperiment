import React, { Component } from 'react';
import { View, TextInput, Image, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Icon } from 'native-base';
import { typography, color } from 'react-native-material-design-styles';
import ImagePicker from 'react-native-image-crop-picker';

Avatar = (props) => {
  const image = props.image;
  if (image) {
    return <Image source={image} style={styles.image}/>;
  } else {
    return <Icon ios='ios-camera' android="md-camera" style={styles.cameraIcon}/>;
  }
};

export default class PlayerScreen extends Component {

  static navigationOptions = {
    title: 'New Player',
    headerRight: (
      <TouchableNativeFeedback>
        <Icon
          ios='ios-checkmark'
          android="md-checkmark"
          style={{
            margin: 5,
          }}
        />
      </TouchableNativeFeedback>
    ),
  };

  constructor(props) {
    super(props);

    this.state = {
      image: null,
      name: '',
    };
  }

  onPressThumbnail = () => {
    ImagePicker.openCamera({
      width: 160 * 2,
      height: 160 * 2,
      cropping: true,
      cropperCircleOverlay: true,
    }).then(image => {
      this.setState((prevState, props) => ({
        ...prevState,
        image: {uri: image.path, width: image.width, height: image.height},
      }))
    });
  };

  render() {
    const { image } = this.state;

    return (
      <View style={styles.container}>

        <View style={styles.buttonContainer}>
          <TouchableNativeFeedback
            onPress={this.onPressThumbnail}
            useForeground={true}
          >
            <View style={styles.childContainer}>
              <Avatar image={image}/>
            </View>
          </TouchableNativeFeedback>
        </View>

        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({name: text})}
          value={this.state.name}
          maxLength = {10}
          placeholder={'name'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    elevation: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
  },
  textInput: {
    ...typography.paperFontCaption,
    fontSize: typography.paperFontCaption.fontSize * 2,
    width: 160,
    textAlign: 'center',
  },
  cameraIcon: {
    fontSize: 60,
    ...color.googleGrey500,
  },
  headerIcons: {
    margin: 5,
  },
  buttonContainer: {
    width: 160,
    height: 160,
    borderRadius: 80,
    overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 5,
  },
  childContainer: {
    width: 160,
    height: 160,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
});