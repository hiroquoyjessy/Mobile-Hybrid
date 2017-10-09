import React, {Component} from 'react';
import * as firebase from 'firebase';
import { Icon } from 'react-native-elements'
import {
	StackNavigator,
	TabNavigator
} from 'react-navigation';
import {
	AppRegistry,
} from 'react-native';

//import AccountScreen from './app/components/AccountScreen/AccountScreen';
import CartScreen from './app/components/CartScreen';
import ShopScreen from './app/components/ShopScreen';
import AccountInformationsScreen from './app/components/AccountInformationsScreen';
import AccountOrdersScreen from './app/components/AccountOrdersScreen';
import AuthenticationScreen from './app/components/AuthenticationScreen'
import LoginScreen from './app/components/LoginScreen';
import SignUpScreen from './app/components/SignUpScreen';


// Account Page

const AccountScreen = TabNavigator({
  Informations: {
    screen: AccountInformationsScreen,
    navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'My Informations'
			})
  },
  Orders: {
    screen: AccountOrdersScreen,
    navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'My Orders'
			})
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: false,
  swipeEnabled: true
});

// Main Page

const MainScreenNavigator = TabNavigator({
  Shop: {
    screen: ShopScreen,
    navigationOptions: ({ navigation }) => ({
				title: 'Shop',
        tabBarLabel: 'Shop',
        tabBarIcon: ({tintColor}) => <Icon name='shop' type='entypo' size={25} color={tintColor}/>
			})
  },
  Cart: {
    screen: CartScreen,
    navigationOptions: ({ navigation }) => ({
				title: 'Cart',
        tabBarLabel: 'Cart',
        tabBarIcon: ({tintColor}) => <Icon name='shopping-basket' type='entypo' size={25} color={tintColor}/>
			})
  },
  Account: {
    screen: AccountScreen,
    navigationOptions: ({ navigation }) => ({
				title: 'Account',
        tabBarLabel: 'Account',
        tabBarIcon: ({tintColor}) => <Icon name='account-circle' type='material-community' size={25} color={tintColor}/>
			})
  },
}, {
  animationEnabled: false,
  swipeEnabled: true
});

const AuthStack = StackNavigator({
	Login: {
		screen: LoginScreen,
		navigationOptions: ({ navigation }) => ({
				title: 'Login',
				tabBarLabel: 'Already a member',
				tabBarIcon: ({tintColor}) => <Icon name='login' type='entypo' size={20} color={tintColor}/>
			})
	},
	SignUp: {
		screen: SignUpScreen,
		navigationOptions: ({ navigation }) => ({
				title: 'SignUp',
				tabBarLabel: 'New here ?',
				tabBarIcon: ({tintColor}) => <Icon name='new-message' type='entypo' size={20} color={tintColor}/>
			})
	},
	Main: {
    screen: MainScreenNavigator,
  }
});

// const Authentication = StackNavigator({
// 	Login: {
// 		screen: AuthStack,
// 	},
// 	SignUp: {
// 		screen: AuthStack,
// 	}
// });
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAyfryUv0UaDyvDa1wv8H2m_4K9TpOMX2I",
    authDomain: "mobileuf-6a34b.firebaseapp.com",
    databaseURL: "https://mobileuf-6a34b.firebaseio.com",
    projectId: "mobileuf-6a34b",
    storageBucket: "mobileuf-6a34b.appspot.com",
    messagingSenderId: "859318011895"
  };
  firebase.initializeApp(config);

AppRegistry.registerComponent('UF', () => AuthStack);
