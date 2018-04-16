import React from 'react';
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import LoginForm from './LoginForm';
import Home from './Home';
import SideMenu from './SideMenu';
// import Settings from './components/Settings';

const RouterComponent = () => {
    return (
        <Router>
            <Scene overlay>
                <Scene key="lightbox" lightbox leftButtonTextStyle={{ color: 'green' }} backButtonTextStyle={{ color: 'red' }} initial>
                    <Scene key="modal" modal hideNavBar>
                        <Scene key="auth" initial>
                            <Scene key="login" component={LoginForm} title="Please Login" titleStyle={{ textAlign: 'center' }} />
                        </Scene>
                        <Scene key="drawer" drawer contentComponent={SideMenu}>
                            <Scene key="main" >
                                <Scene
                                    key="home"
                                    component={Home}
                                    title="Home"
                                    initial
                                    hideNavBar
                                />                              
                            </Scene>
                        </Scene>
                    </Scene>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;