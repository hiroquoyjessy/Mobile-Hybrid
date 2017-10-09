import React from 'react';
import { StyleSheet, Text, View , AppRegistry} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends React.Component {
    static navigationOptions = {
      title: 'Home',
    };

  render() {
    return (
      <Text>Hello Home </Text>
    );
  }
}

// export default const UF = StackNavigator({
//     Home: { screen: Home },
// });

const styles = StyleSheet.create({
  container: {
      flex: 1,

    backgroundColor: '#fff',
  },
});

AppRegistry.registerComponent('Home', () => Home)
