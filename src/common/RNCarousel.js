import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableHighlight
} from 'react-native';


import Carousel from 'react-native-looped-carousel'
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');


var carouselTest = React.createClass({
  getInitialState: function() {
    return {
      size: {width: width, height: height/4}
    };
  },
  _onLayoutDidChange: function(e) {
    var layout = e.nativeEvent.layout;
    this.setState({size: {width: layout.width, height: layout.height}});
  },

  _handle:function(item){
    this.props.navigator.push({
       title:item.title,
       id:'webview',
       params: {
        url: item.extra.innerurl
      }
    })
  },


  render: function() {
    return (
      <View style={{flex: 0.5}} onLayout={this._onLayoutDidChange} >
        <Carousel delay={2000} style={this.state.size} >
            {
              this.props.data.map( (item,index) =>  
                 <TouchableHighlight onPress={this._handle.bind(this, item)} >
                    <Image source={{ uri:item.imgurl }} style={this.state.size} />
                  </TouchableHighlight> 
              )
            }
        </Carousel>
      </View>
    );
  }
});

export default carouselTest