import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Container, Content, List, ListItem, InputGroup,
  Input, Icon, Picker, Button, Header, Right, Body,
  Title, Drawer
}
  from 'native-base';
import { Actions } from 'react-native-router-flux';

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

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
  }
  openDrawer = () => {
    console.log('open drawer');
    Actions.drawerOpen();
    console.log('close drawer');
  };
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Register Student</Title>
          </Body>
          <Right>
            <Button
              transparent onPress={this.openDrawer}
            >
              <Icon name='md-menu' />
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={styles.container}>
            <Text style={styles.welcome}>Welcom Girish Talekar</Text>
            <Text style={styles.instructions}>
              This is a React Native snapshot test.
        </Text>
          </View>
        </Content>
      </Container>
    );
  }
}