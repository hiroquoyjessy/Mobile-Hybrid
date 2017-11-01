import React, { Component } from 'react';
import Camera from 'react-native-camera';
import { Icon } from 'react-native-elements'
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Button } from 'native-base';
import { NavigationActions } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default class PhotoScreen extends Component {

  takePicture() {
      const options = {};
      //options.location = ...
      this.camera.capture({metadata: options, target: Camera.constants.CaptureTarget.disk})
        .then((data) => {
          this.props.navigation.state.params.setFilePath(data);
          this.props.navigation.dispatch(NavigationActions.back())
        })
        .catch(err => console.error(err));
    }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Button
            transparent
            style={{ marginLeft: 180, marginBottom: 20 }}
            onPress={this.takePicture.bind(this)}>
            <Icon name='camera' type='entypo' color='grey' size={20}/>
          </Button>
        </Camera>
      </View>
    );
  }
}
