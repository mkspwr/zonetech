import React from 'react';
import { Home } from './views/home.js';
import { GreenPage } from './views/green';
import { RedPage } from './views/red';
import { YellowPage } from './views/yellow';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



const MyRoutes = createStackNavigator({
  HomeRT: {
    screen: Home
  },
  GreenRT:{
    screen: GreenPage
  },
  RedRT:{
    screen: RedPage
  },
  YellowRT:{
    screen: YellowPage
  }

},
  {
    initialRouteName: 'HomeRT'
  }
);

export default createAppContainer(MyRoutes)
