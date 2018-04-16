import {
  Text,
} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Body,
  Content,
  Card,
  CardItem,
  Left,
  Button,
  Icon,
  Title,
  Right

} from 'native-base';
import { Actions } from 'react-native-router-flux';

class StudentDetails extends Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
}
  openDrawer = () => {
    console.log('open drawer');
    Actions.refresh({key: 'drawer', open: true });
    // console.log(Actions.get('drawer'));
    // this.drawer._root.open();
  };
  getStudents() {
    const list = [];
    for (let i = 0; i < this.props.students.length; i++) {
      list.push(
        <Card key={i}>
          <CardItem header>
            <Text> {this.props.students[i].name}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                email : {this.props.students[i].email}
              </Text>
              <Text>
                Phone : {this.props.students[i].phone}
              </Text>
            </Body>
          </CardItem>
          <CardItem footer>
            <Text>Address: {this.props.students[i].address}</Text>
          </CardItem>
        </Card>);
    }
    return list;
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => { Actions.registerStudent(); }} >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Student Details</Title>
          </Body>
          <Right>
            <Button
              transparent onPress={this.openDrawer}
            >
              <Icon name='md-menu' />
            </Button>
          </Right>
        </Header>
        <Content>{this.getStudents()}</Content>
      </Container>
    );
  }
}

export default connect((state) => ({ students: state.students }))(StudentDetails);

