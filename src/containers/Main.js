import React, { Component } from 'react'
import {
  StyleSheet,
} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'

import Home from './home'
import Config from '../Config'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab:Config.initTab
    }
  }

  render() {
    return (
      <TabNavigator>
        
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Home'}
          title="发现音乐" 
          renderIcon={() => <Icon name="star-o" size={25} color="#aaa" />}
          renderSelectedIcon={() => <Icon name="star" size={25} color="#238CFE" />}
          onPress={() => {this.setState({ selectedTab: 'Home' });this.props.route.title='首页'}}>
          <Home navigator={this.props.navigator} route={this.props.route}/>
        </TabNavigator.Item>
        
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Find'}
          title="我的音乐"
          renderIcon={() => <Icon name="music" size={25} color="#aaa" />}
          renderSelectedIcon={() => <Icon name="music" size={25} color="#238CFE" />}
          onPress={() => {this.setState({ selectedTab: 'Find' });this.props.route.title='发现' } }>
          <Home navigator={this.props.navigator} route={this.props.route}/>
        </TabNavigator.Item>
        
        <TabNavigator.Item
          selected={this.state.selectedTab === 'Attention'}
          title="朋友"
          renderIcon={() => <Icon name="reorder" size={25} color="#aaa" />}
          renderSelectedIcon={() => <Icon name="reorder" size={25} color="#238CFE" />}
          onPress={() => {this.setState({ selectedTab: 'Attention' });this.props.route.title='关注' } }>
          <Home navigator={this.props.navigator} route={this.props.route}/>
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'Me'}
          title="帐号"
          renderIcon={() => <Icon name="user" size={25} color="#aaa" />}
          renderSelectedIcon={() => <Icon name="user" size={25} color="#238CFE" />}
          onPress={() => {this.setState({ selectedTab: 'Me' });this.props.route.title='我' } }>
          <Home navigator={this.props.navigator} route={this.props.route}/>
         </TabNavigator.Item>
      
      </TabNavigator>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#000'
  }
})

