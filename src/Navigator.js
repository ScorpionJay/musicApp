import React , { Component } from 'react'
import { Navigator,View } from 'react-native'

import Splash from './containers/Splash'
import Login from './containers/Login'
import Main from './containers/Main'
import Register from './containers/Register'
import Home from './containers/home'
import Album from './containers/album'
import Play from './containers/play'
import Webview from './common/Webview'

export default class Setup extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
  }

  _renderScene(route, navigator){
    switch(route.id){
      case 'splash':
            return <Splash navigator={navigator} route={route}/>
            break;
       case 'login':
            return <Login navigator={navigator} route={route}/>
             break;
      case 'register':
            return <Register navigator={navigator} route={route}/>
            break;
      case 'main':
            return <Main navigator={navigator} route={route}/>
            break;

      // home
      case 'home':
            return <Home navigator={navigator} route={route}/>
            break;
      case  'album':
            return <Album navigator={navigator} route={route}/>
            break;

      case  'play':
            return <Play navigator={navigator} route={route}/>
            break;
            

      // me
      case  'me':
            return <Me navigator={navigator} route={route}/>
            break;
      case  'account':
            return <Home navigator={navigator} route={route}/>
            break;
      case  'about':
            return <Home navigator={navigator} route={route}/>
            break;
      case  'setting':
             return <Home navigator={navigator} route={route}/>
            break;

      case  'post':
             return <Home navigator={navigator} route={route}/>
            break;
      case  'posts':
            return <Home navigator={navigator} route={route}/>
            break;
      case  'CreateDynamic':
             return <Home navigator={navigator} route={route}/>
            break
      case 'dynamicDetail':
            return <Home navigator={navigator} route={route}/>
            break


      case 'webview':
            return <Webview navigator={navigator} route={route}/>
            break
    }
  }
  render() {
    return (
        <Navigator
            initialRoute={{ title: '首页', id:'main'}}
            renderScene={this._renderScene}
        />    
    );
  }
}



