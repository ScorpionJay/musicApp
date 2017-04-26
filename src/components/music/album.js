/**
* 专辑组件
*/

import React, { Component, PropTypes } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Link } from 'react-router'
const width = Dimensions.get('window').width / 3.02;

/**
* 专辑列表
*/
export default class Album extends Component { 

  render() {
      let {specialname,intro,imgurl,playcount} = this.props.data.info
      let imgurl2 = imgurl.replace('{size}',400)
      return (
        <ScrollView style={Styles.container}>
            <View style={Styles.top}>
              <Image style={Styles.style_image} source={{uri: imgurl2}} />
              <Text style={Styles.specialname} >{specialname}</Text>
            </View>
            {
              this.props.data.list.map((obj,index)=>
                  <Item index={index+1}  {...obj} key={index} click = {this.props.click}/>
              )
            }
        </ScrollView>
      )
  }
}

/**
* 专辑详情
*/
class Item extends Component { 

  addMusic(){
    const {filename,imgurl,intro,playcount,hash,index} = this.props;
    this.props.click({
      hash,name:filename
    })
  }

  render() {
      const {filename,imgurl,intro,playcount,hash,index,currentHash} = this.props;
      return (
        <TouchableOpacity style={Styles.containerItem} onPress={this.addMusic.bind(this)} >
          <Text style={Styles.index}>{index}.</Text>
          <Text style={Styles.name}>{filename}</Text>
        </TouchableOpacity>
      )
  }
}

const Styles =  StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    padding:5,
    marginBottom:30
  },
  top:{
    display:'flex',
    flexDirection: 'row',
    marginBottom:20,
    padding:5
  },
  containerItem:{
    display:'flex',
    flexDirection: 'row',
     marginBottom:20
  },
  specialname:{
    padding:10
  },
  intro:{
    display:'flex',
    padding:1,
    zIndex: 2
  },
  introImg:{
    width:12,
  },
  count:{
    position:'absolute',
    width:11,
    textAlign: 'right',
    color:'#fff',
    fontSize:8
  },
  introName:{
    padding:1
  },
  mask:{
    height:13.5,
    width:12,
    // filter: 'blur(60px)',
  },
  ItemContainer:{
    display: 'flex',
    flex:1,
    padding:1,
    color:'#333'
  },
  index:{
    fontSize:18
  },
  name:{
    display:'flex',
    flex:1,
    borderBottomColor:'#333',
    borderBottomWidth:1,
    padding:3,
    paddingLeft:5,
    marginLeft:5,
    marginRight:15
  },
    style_image:{
    width:width,
    height:width
  },
})