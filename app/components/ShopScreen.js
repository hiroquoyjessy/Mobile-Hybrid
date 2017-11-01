import React, {Component} from 'react';
import { Container, Header, Content, Form, Item, Card, CardItem, Input, Label, Button, Text, H1 } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
	AppRegistry,
	View,
  Image
} from 'react-native';
import * as firebase from 'firebase';
import {
	StackNavigator,
	TabNavigator
} from 'react-navigation';

export default class ShopScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Products: []
		}
		this.addToCart = this.addToCart.bind(this);
		this.updateShop = this.updateShop.bind(this)
	}

componentWillMount() {
	firebase.database().ref().once('value').then((snapshot) => {
		this.setState({
			Products: snapshot.val().Products
		});
	});
}

updateShop() {
	firebase.database().ref().once('value').then((snapshot) => {
		this.setState({
			Products: snapshot.val().Products
		});
	});
}

addToCart(id) {
	productNb = id + 1;
}

render(){
		const {navigate} = this.props.navigation;
		const products = Object.values(this.state.Products);
  	return(
      <Container>
        <Content>
					<Button
						success
						block
						onPress={() => navigate('AddProduct', {updateShop: this.updateShop})}
					>
						<Text>Add a product</Text>
					</Button>
						{products.map((e, id) => {
							return(
							<Grid key={id}>
								<Col>
										<Card>
											<CardItem header>
												<Text style={{ fontSize: 20, fontWeight: 'bold' }}>{e.name}</Text>
											</CardItem>
											<CardItem cardBody>
												<Image resizeMode='contain' source={{ uri: e.pictureUrl }} style={{height: 150, flex: 1}}/>
											</CardItem>
											<CardItem footer>
												<Grid>
													<Text style={{ fontSize: 14 }}>Price: {e.price}€</Text>
												</Grid>
												<Grid  style={{ justifyContent: 'flex-end' }}>
													<Button
														primary
														onPress={() => navigate('Cart', {shopArr: e})}
													>
														<Text style={{ fontSize: 14 }}>Add to cart</Text>
													</Button>
												</Grid>
											</CardItem>
										</Card>
									</Col>
								</Grid>
							)
						})}
        </Content>
      </Container>
    );
  }
}
