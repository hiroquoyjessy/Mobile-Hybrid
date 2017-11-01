import React, {Component} from 'react';
import {
	AppRegistry,
	View,
	Image,
	Picker
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import * as firebase from 'firebase';
import { Container, Header, Content, Form, Item, Card, CardItem, Input, Label, Button, Text, H1 } from 'native-base';
import {
	StackNavigator,
	TabNavigator
} from 'react-navigation';
import { Icon } from 'react-native-elements'

const total = 0;
const isInit = true;
const isSetup = true;
const isChanged = false;
const arr = [];

export default class CartScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			totals: [],
			productsArr: []
		}
	}

componentWillReceiveProps(nextProps) {
			if (isSetup) {
						arr.push(1);
						total += nextProps.navigation.state.params.shopArr.price;
						this.setState({
							totals: arr,
							productsArr: [...this.state.productsArr, nextProps.navigation.state.params.shopArr]
						})
			}
}

componentDidUpdate() {
	isInit = false;
}



  render(){
    return(
			<Container>
        <Content>
					<Grid>
						<Col>
						{this.state.productsArr.map((e, id) => {
							return(
							<Grid key={id}>
								<Col>
										<Card>
											<CardItem cardBody style={{ alignItems: 'center' }}>
												<Grid>
													<Image resizeMode='contain' source={{ uri: e.pictureUrl }} style={{height: 60, width: null, flex: 1}}/>
												</Grid>
												<Grid>
													<Text>Price: {e.price*this.state.totals[id]} €</Text>
												</Grid>
												<Grid>
													<Button
														transparent
														style={{ marginRight: 5 }}
														onPress={() => {
															let arr = this.state.totals;
															arr[id] += 1;
															this.setState({
																totals: arr
															})
															total += e.price;
														}}
													>
														<Icon name='circle-with-plus' type='entypo' color='grey' size={20}/>
													</Button>
													<Text style={{ marginTop: 12 }}>{this.state.totals[id]}</Text>
													<Button
														transparent
														style={{ marginLeft: 5 }}
														onPress={() => {
															let arr = this.state.totals;
															if (arr[id] -= 1 > 0) {
																this.setState({
																	totals: arr
																})
																total -= e.price;
															}
															else {
																arr[id] = 1;
																this.setState({
																	totals: arr
																})
															}
														}}
													>
														<Icon name='circle-with-minus' type='entypo' color='grey' size={20}/>
													</Button>
													<Button
														transparent
														style={{ marginLeft: 30 }}
														onPress={() => {
															total = total - this.state.productsArr[id].price*this.state.totals[id];
															this.setState({
														    productsArr: this.state.productsArr.filter((_, i) => i !== id),
																totals: this.state.totals.filter((_, i) => i !== id)
														  });
														}}
													>
														<Icon name='trash' type='entypo' color='red' size={20}/>
													</Button>
												</Grid>
											</CardItem>
										</Card>
									</Col>
								</Grid>
							)
						})}
						<Grid>
								<Text style={{ textAlign: 'center' }}> Total: {total} €</Text>
						</Grid>
						</Col>
					</Grid>
					<Button
						success
						block
						onPress={() => total > 0 ? alert('Purchase successful !') : alert('Why don\'t you add some products ?')}
					>
						<Text>Order</Text>
					</Button>
        </Content>
      </Container>
    )
  }
}
