import React, {Component} from 'react';
import * as firebase from 'firebase';
import { Icon, Button } from 'react-native-elements'
import {
	StackNavigator,
	TabNavigator
} from 'react-navigation';
import {
	AppRegistry,
} from 'react-native';

import PhotoScreen from './app/components/PhotoScreen';
import AddProductScreen from './app/components/AddProductScreen';
import CartScreen from './app/components/CartScreen';
import ShopScreen from './app/components/ShopScreen';
import AccountInformationsScreen from './app/components/AccountInformationsScreen';
import LoginScreen from './app/components/LoginScreen';
import SignUpScreen from './app/components/SignUpScreen';

// Account Page

const AccountScreenNavigator = StackNavigator({
  Informations: {
    screen: AccountInformationsScreen,
    navigationOptions: ({ navigation }) => ({
				title: 'Account',
        tabBarLabel: 'My Informations'
			})
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: false,
  swipeEnabled: true
});

const ShopScreenNavigator = StackNavigator({
	Shop: {
    screen: ShopScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Shop',
		})
	},
	AddProduct: {
		screen: AddProductScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Add a product',
		})
	},
	Photo: {
		screen: PhotoScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Photo screen',
		})
	}
})

// Main Page

const MainScreenNavigator = TabNavigator({
  Shop: {
    screen: ShopScreenNavigator,
    navigationOptions: ({ navigation }) => ({
				header: null,
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
    screen: AccountScreenNavigator,
    navigationOptions: ({ navigation }) => ({
				header: null,
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
		header: null,
  }
});

  const config = {
    apiKey: "AIzaSyAyfryUv0UaDyvDa1wv8H2m_4K9TpOMX2I",
    authDomain: "mobileuf-6a34b.firebaseapp.com",
    databaseURL: "https://mobileuf-6a34b.firebaseio.com",
    projectId: "mobileuf-6a34b",
    storageBucket: "mobileuf-6a34b.appspot.com",
    messagingSenderId: "859318011895"
  };
  firebase.initializeApp(config);

AppRegistry.registerComponent('UF', () => AuthStack);
