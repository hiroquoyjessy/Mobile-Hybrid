import React, { Component } from 'react';
import * as firebase from 'firebase';
import RNFetchBlob from 'react-native-fetch-blob'
import { Container, Header, Content, Grid, Col, Form, Item, Card, CardItem, Input, Label, Button, Text, H1 } from 'native-base';
import Camera from 'react-native-camera';
import {
  Image
} from 'react-native';
const Blob = RNFetchBlob.polyfill.Blob
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob
export default class AddProductScreen extends Component {
  constructor() {
    super();
    this.state = {
      productNb: 0,
      name: '',
      price: 0,
      file: '',
      picturePath: '',
    }
    this.setFilePath = this.setFilePath.bind(this);
  }

  async addProduct() {
    if (this.state.name !== '' && this.state.price !== 0 &&
     this.state.picturePath !== '') {
      const picturePath = this.state.picturePath
      rnfbURI = RNFetchBlob.wrap(picturePath);
      Blob
      .build(rnfbURI, { type : 'image/jpg;'})
      .then((blob) => {
        // upload image using Firebase SDK
        firebase.storage()  // This call never returns the promise
        .ref('images')
        .child(this.state.name)
        .put(blob, { contentType : 'image/jpg' })
        .then(async (snapshot) => {
             await firebase.database().ref(`Products/Product${this.state.productNb+1}`).set({
               name: this.state.name,
               pictureUrl: snapshot.metadata.downloadURLs[0],
               price: this.state.price,
             });
             alert('Your product has been added to the Shop !')
             this.props.navigation.state.params.updateShop();
            blob.close();
        });
      })
      .catch((err) => {
          throw('Blob err:', err);  // This is not logged
      });
    }
    else {
      alert('The name, price or photo is empty :(');
    }
  }

  setFilePath(data) {
    this.setState({
      file: data,
      picturePath: data.path
    })
  }

  componentWillMount() {
    firebase.database().ref().once('value').then((snapshot) => {
      this.setState({
        productNb: Object.values(snapshot.val().Products).length
      });
    });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container>
        <Content style={{ paddingTop: 125, paddingBottom: 50,
            paddingRight: 50, paddingLeft: 50 }}>
            <Form>
              <Grid style={{ justifyContent: 'center' }}>
                <Button light onPress={() => navigate('Photo', {setFilePath: this.setFilePath})}>
                  <Text>Choose a photo</Text>
                </Button>
              </Grid>
              <Grid style={{ justifyContent: 'center' }}>
                <Image resizeMode='contain' source={{uri: this.state.file.path, isStatic: true}} style={{height: 200, flex: 1}}/>
              </Grid>
              <Grid style={{ justifyContent: 'center' }}>
                <Label>Name</Label>
                <Input onChangeText={(text)=> this.setState({name: text})} />
              </Grid>
              <Grid style={{ justifyContent: 'center' }}>
                <Label>Price</Label>
                <Input onChangeText={(text)=> this.setState({price: Number(text)})}
                keyboardType='number-pad'/>
              </Grid>
            </Form>
            <Grid style={{ justifyContent: 'center' }}>
              <Button light onPress={this.addProduct.bind(this)}>
                <Text>Add</Text>
              </Button>
            </Grid>
        </Content>
      </Container>
    );
  }
}
