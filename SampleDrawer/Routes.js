import React, { Component } from 'react';
import { Actions, Router, Reducer, Scene } from 'react-native-router-flux';
import MyDrawer from './MyDrawer'
import TestView from './TestView'


export default class Main extends Component {
  render() {
       return (
         <Router>
             <Scene key="drawer" component={MyDrawer}>
                  <Scene key="main" tabs={false} >
                     <Scene key="fireBaseTest" component={TestView}  />
                  </Scene>
             </Scene> 
         </Router>);

  }
}