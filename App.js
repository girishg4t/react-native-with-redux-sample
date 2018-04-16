import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { Scene, Actions, Router, ActionConst } from 'react-native-router-flux';
import ShowMap from './src/components/ShowMap';
import RegisterStudent from './src/components/RegisterStudent';
import StudentDetails from './src/components/StudentDetails';
import MyDrawer from './src/components/MyDrawer'
import NavigationDrawer from './src/components/NavigationDrawer';
import { appReducer } from './src/reducers';
const buttonImagepath = require('./hamburger_36dp.png');

const Scenes = Actions.create(
    <Scene key='root'>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
            {/* <Scene
            initial
            key='registerStudent' hideNavBar
            component={RegisterStudent} title="Register Student"
        /> */}

            <Scene key='studentDetails' initial component={StudentDetails} type='replace' />
            <Scene key='mapLocation' hideNavBar component={ShowMap} title="Current Location" />
        </Scene>
    </Scene>
);
const ConnectedRouter = connect()(Router);
const store = createStore(appReducer);

store.subscribe(() => {
    console.log(store.getState());
});

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter scenes={Scenes} />
            </Provider>
        );
    }
}
