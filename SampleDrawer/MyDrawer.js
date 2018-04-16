import React, { Component, contentComponent } from 'react';
import PropTypes from 'prop-types';
import {
    Container, Content, List, ListItem, InputGroup,
    Input, Icon, Text, Picker, Button, Header, Right, Body,
    Title, Drawer
}
    from 'native-base';
// import ControlPanel from './ControlPanel';
import {Actions, DefaultRenderer} from 'react-native-router-flux';
import SideMenu from './../sampleRoutes/SideMenu';

class MyDrawer extends Component {
    closeDrawer = () => {
        this.drawer._root.close();
    };
    openDrawer = () => {
        console.log('open drawer');
        this.drawer._root.open();
    };
    render(){
        // const state = this.props.navigationState;
        // const children = state.children;
        return (
            <Drawer
            ref={(ref) => { this.drawer = ref; }}
            content={<SideMenu 
                onSelect={this.closeDrawer.bind(this)}
                style={{ flex: 1, backgroundColor: 'black' }}
            />}
            onClose={() => this.closeDrawer()}
            side='right'
        >
              <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}

MyDrawer.propTypes = {
    children: PropTypes.node,
    route: PropTypes.object,
}


export default MyDrawer; 