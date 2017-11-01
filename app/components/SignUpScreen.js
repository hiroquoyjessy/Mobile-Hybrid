import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import * as firebase from 'firebase';
import { Container, Header, Content, Form, Grid, Item, Input, Label, Button, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';

export default class SignUpScreen extends Component{

  constructor(props) {
    super(props);
    state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  async signup() {
    try {
      if (this.state.password === this.state.confirmPassword) {
        const user = await firebase.auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password);
            firebase.database().ref(`Users/${user.uid}`).set({
              name: this.state.name,
              email: this.state.email,
            });
        this.props
             .navigation
             .dispatch(NavigationActions.reset(
               {
                  index: 0,
                  key: null,
                  actions: [
                    NavigationActions.navigate({ routeName: 'Main'})
                  ]
                }));
      }
      else {
        alert("confirmPassword is different");
      }
    } catch (error) {
        throw error;
    }

}

goLogin() {
  const backAction = NavigationActions.back({
})
this.props.navigation.dispatch(backAction)
}

  render() {
    return(
        <Container>
          <Header />
          <Content style={{ paddingTop: 30, paddingBottom: 50,
              paddingRight: 50, paddingLeft: 50 }}>
            <Form>
              <Item floatingLabel>
                <Label>name</Label>
                <Input onChangeText={(text)=> this.setState({name: text})}
                  autoCorrect={false}
                  autoCapitalize="none"/>
              </Item>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input onChangeText={(text)=> this.setState({email: text})}
                  keyboardType='email-address'
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
              <Item floatingLabel last>
                <Label>Confirm Password</Label>
                <Input onChangeText={(text)=> this.setState({confirmPassword: text})}
                  autoCorrect={false}
                  autoCapitalize="none"
                  secureTextEntry/>
              </Item>
            </Form>
            <Grid style={{ paddingTop: 30, paddingLeft: 90 }}>
              <Button light onPress={this.signup.bind(this)}>
                <Text>SignUp</Text>
              </Button>
            </Grid>
            <Grid style={{ paddingTop: 30, paddingLeft: 40 }}>
            <Text style={{color: 'blue'}}
                  onPress={this.goLogin.bind(this)}>
              I already have an account
            </Text>
            </Grid>
          </Content>
        </Container>
    );
  }
}
