import React, { Component } from 'react';
// import Drawer from 'react-native-drawer';
// import ControlPanel from './ControlPanel';
import { Actions, DefaultRenderer } from 'react-native-router-flux';
import SideBar from './SideBar';
import {
    Container, Content, List, ListItem, InputGroup,
    Input, Icon, Text, Picker, Button, Header, Right, Body,
    Title, Drawer
}
    from 'native-base';

class MyDrawer extends Component {
    constructor(props) {
        super(props);
        this.openDrawer = this.openDrawer.bind(this);
    }
    closeDrawer = () => {
        this.drawer._root.close();
    };
    openDrawer = () => {
        console.log('open drawer');
        this.drawer._root.open();
    };
    render() {
        const state = this.props.navigationState;
        const children = state.children;

        closeDrawer = () => {
            this.drawer._root.close()
        };
        openDrawer = () => {
            this.drawer._root.open()
        };

        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar />}
                onClose={() => this.closeDrawer()}
                side='right'
                onSelect={() => { console.log("Onpress") }}
            >
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
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}


export default MyDrawer; 