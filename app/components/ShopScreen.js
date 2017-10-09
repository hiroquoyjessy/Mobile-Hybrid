import React, {Component} from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Icon, Left, Body, Right } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
	AppRegistry,
	Text,
	View,
	Button,
  Image
} from 'react-native';

import {
	StackNavigator,
	TabNavigator
} from 'react-navigation';

export default class ShopScreen extends Component {
  render(){
    return(
      <Container>
        <Content>
          <Grid>
            <Col>
              <Card>
                <CardItem cardBody>
                  <Image source={{uri: 'https://5.imimg.com/data5/EK/TF/MY-2445732/heel-joint-pain-relive-medicine-500x500.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardItem cardBody>
                  <Image source={{uri: 'https://5.imimg.com/data5/IY/DW/MY-15666310/throat-medicine-500x500.png'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardItem cardBody>
                  <Image source={{uri: 'https://4.imimg.com/data4/DM/UE/MY-26960814/tussikind-medicine-500x500.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
              </Card>
            </Col>
          </Grid>
          <Grid>
            <Col>
              <Card>
                <CardItem cardBody>
                  <Image source={{uri: 'https://4.imimg.com/data4/PE/JR/MY-9520310/ayurvedic-gastric-medicine-500x500.png'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardItem cardBody>
                  <Image source={{uri: 'https://5.imimg.com/data5/QB/QN/MY-1092346/herbal-hypertension-medicine-500x500.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardItem cardBody>
                  <Image source={{uri: 'https://5.imimg.com/data5/EB/PO/MY-23907095/ayurvedic-medicine-500x500.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
              </Card>
            </Col>
          </Grid>

        </Content>
      </Container>
    );
  }
}
