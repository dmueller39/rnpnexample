/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

var PushNotification = require('react-native-push-notification');



export default class rnpnexample extends Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    PushNotification.configure({
        onNotification: (notification) => {
            this.didReceiveNotification(notification)
        },
    });
  }

  didReceiveNotification(notification) {
    this.setState({
      notificationString: JSON.stringify(notification, null, 2),
    });
  }

  schedule() {

    PushNotification.localNotificationSchedule({
      number: "0",
      date: new Date(Date.now() + 3000),
      message: `Test local push notification`,
      userInfo: {
	nestedKey: 'nestedValue',
      }
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => this.schedule()}>
          <Text>Press to schedule local notification</Text>
        </TouchableHighlight>
        <Text>Last Notification:</Text>
        <Text>{this.state.notificationString}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('rnpnexample', () => rnpnexample);
