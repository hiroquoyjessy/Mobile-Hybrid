import React, {Component} from 'react';
import {
	AppRegistry,
	View
} from 'react-native';
import { Container, Header, Content, Form, Grid, Item, Input, Label, Button, Text, H1 } from 'native-base';
import {
	NavigationActions
} from 'react-navigation';
import * as firebase from 'firebase';

export default class AccountInformationsScreen extends Component {

	constructor(props) {
		super(props);
	}

	async signout() {
		try {
				await firebase.auth().signOut()
				alert('Signed out');
		 		this.props.navigation.dispatch(NavigationActions.reset(
									 {
											index: 0,
										 key: null,
											actions: [
												NavigationActions.navigate({ routeName: 'Login'})
											]
										}))
		} catch (e) {
			throw e;
		}
	}

  render(){
    return(
			<Container>
        <Content>
          <H1 style={{ textAlign: 'center' }}>
					{`Hi ${firebase.auth().currentUser.email}, yes I only know your email address is that a problem ? :) `}</H1>
					<Button
						danger
						block
						onPress={this.signout.bind(this)}
					>
						<Text>Logout</Text>
					</Button>
        </Content>
      </Container>
    )
  }
}
