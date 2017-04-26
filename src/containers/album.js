import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions
} from 'react-native';

import ToolBar from '../common/ToolBar'
import Config from '../Config'

import { connect } from 'react-redux'
import { fetchListItemApi } from '../actions/home'

import { albumListAPI } from '../actions/album'

import Album from '../components/music/album'

const width = Dimensions.get('window').width / 3.02;

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {}
  }


  componentDidMount() {
    const { dispatch } = this.props
     dispatch(albumListAPI(this.props.route.params.id))
    // dispatch(fetchListItemApi(this.props.route.params.id))
  }


  click(music){
    const {navigator,router} = this.props
    navigator.push({
      title:music.name,
      id:'play',
      params: {
               ...music
           }
    })
  }

  render() {
    const { dispatch,data,login,controll,music } = this.props
    const { imgurl,specialname } = data.info
     const imgurl2 = imgurl.replace('{size}',400);
    return (
      <View>
          <ToolBar navigator={this.props.navigator} route={this.props.route}/>


          <Album data={data}  click={(e) => this.click(e)} />


      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  style_image:{
    width:width,
    height:width
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


function map(state) {
  return {
    data: state.album.albumList,
  }
}

export default connect(map)(App)


