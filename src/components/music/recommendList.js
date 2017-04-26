/**
* 推荐歌单组件
*/
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
const width = Dimensions.get('window').width / 3.02;

/**
* 推荐歌单列表
*/
export default class MusicList extends Component { 
  render() {
      return (
        <View >
          {
            this.props.data.length === 1 ? 
              <View></View>
            : 
              <View >
                <Text style={ Styles.text }>推荐歌单</Text>
                <View style={Styles.container}>
                  {
                    this.props.data.map((obj,index)=> <MusicItem data={obj} key={index} navigator={this.props.navigator} route={this.props.route}/> )
                  }
                </View>
              </View>
          }
          
        </View>
      )
  }
}

/**
* 推荐歌单详情
*/
class MusicItem extends Component { 

  handler(){
    const {navigator,router} = this.props
    navigator.push({
      title:'歌单',
      id:'album',
      params: {
               id: this.props.data.specialid
           }
    })
  }

  render() {
      const {specialname,imgurl,intro,playcount,specialid} = this.props.data;
      const imgurl2 = imgurl.replace('{size}',400);
      return (
        <TouchableOpacity style={Styles.containerItem} onPress={this.handler.bind(this)} to={`/album/${specialid}`}>
          <Image style={Styles.style_image} source={{uri: imgurl2}} />
          <Text style={Styles.count}>{ parseInt(playcount/10000) + '万'}</Text>
          <Text style={Styles.name}>{specialname}</Text>
        </TouchableOpacity>
      )
  }
}


const Styles =  StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'space-between'
  },
  text:{
    padding:10,
    fontSize:12
  },
  containerItem:{
    marginBottom:10
  },
  name:{
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize:9,
    width:100,
    color:'#333',
    padding:3
  },
  count:{
    backgroundColor:'#333',
    opacity:.5,
    position:'absolute',
    width:width,
    textAlign: 'right',
    color:'#fff',
    fontSize:8,
    paddingRight:10,
    paddingTop:1
  },
  style_image:{
    width:width,
    height:width
  }
})