import React from 'react';
import { Home } from './views/home.js'
import { GreenPage } from './views/green'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



const MyRoutes = createStackNavigator({
  HomeRT: {
    screen: Home
  },
  GreenRT:{
    screen: GreenPage
  }

},
  {
    initialRouteName: 'HomeRT'
  }
);

export default createAppContainer(MyRoutes)
