import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  Container, Content, List, ListItem, InputGroup,
  Input, Icon, Text, Picker, Button, Header, Right, Body,
  Title, Drawer
}
  from 'native-base';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // const { dispatch } = this.props;
    // dispatch(addStudent(this.state));
    Actions.home();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>
          This is a React Native snapshot test.
        </Text>
        <Button
          accessibilityLabel='signUp'
          style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
          onPress={this.handleClick}
        >
          <Text>Sign Up</Text>
        </Button>
      </View>
    );
  }
}