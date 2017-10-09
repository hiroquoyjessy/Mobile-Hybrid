import React, { Component } from 'react';
import * as firebase from 'firebase';
import { StyleSheet, View, TextInput } from 'react-native';
import { Container, Header, Content, Form, Grid, Item, Input, Label, Button, Text } from 'native-base';
import {
	StackNavigator,
  NavigationActions
} from 'react-navigation';
import { MainScreenNavigator } from '../../App';

export default class LoginScreen extends Component{

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  async login() {

      try {
          await firebase.auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          console.log("Logged In!");
          this.props
               .navigation
               .dispatch(NavigationActions.reset(
                 {
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Main'})
                    ]
                  }));
      } catch (error) {
        console.log("Not logged In");
        console.log("In catch");
          console.log(error.toString())
      }

  }

  goSignUp() {
    this.props.navigation.navigate('SignUp')
  }

  render() {
    return(
        <Container>
          <Header />
          <Content style={{ paddingTop: 125, paddingBottom: 50,
              paddingRight: 50, paddingLeft: 50 }}>
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input onChangeText={(text)=> this.setState({email: text})}
                  autoCorrect={false}
                  autoCapitalize="none"/>
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input onChangeText={(text)=> this.setState({password: text})}
                  autoCorrect={false}
                  autoCapitalize="none"
                  secureTextEntry/>
              </Item>
            </Form>
            <Grid style={{ paddingTop: 30, paddingLeft: 90 }}>
              <Button light onPress={this.login.bind(this)}>
                <Text>Light</Text>
              </Button>
            </Grid>
            <Grid style={{ paddingTop: 30, paddingLeft: 60 }}>
            <Text style={{color: 'blue'}}
                  onPress={this.goSignUp.bind(this)}>
              Create an account
            </Text>
            </Grid>
          </Content>
        </Container>
    );
  }
}
