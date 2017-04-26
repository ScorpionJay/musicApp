import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
  ScrollView,
  Button
} from 'react-native';
import { connect } from 'react-redux'
// import {PlayBtn,StopBtn,ListBtn,PreBtn,NextBtn} from '../components/music/musicBtn'
import { currentMusicAPI,changetimeAPI,controllAPI,changeMusicAPI } from '../actions/music'
import ToolBar from '../common/ToolBar'

const width = Dimensions.get('window').width / 3.02;

import Video from 'react-native-video';

class Play extends Component {

   componentDidMount(){
    const { dispatch } = this.props
    const {hash,name} = this.props.route.params
    // && music.currentMusic.hash !== hash
    if( hash ){
         dispatch(currentMusicAPI(hash))
    }
  }


  controllHandler(status){
    const { dispatch,controll } = this.props
     dispatch(controllAPI(controll === 'pause' ? 'play' : 'pause' ))
  }

  render() {
    const { dispatch,currentMusic,login,krc,time,music,controll } = this.props
    // const {currentTime } = this.props.time
    let imgurl2 = currentMusic.imgUrl.replace('{size}',400)

    const {hash,name} = this.props.route.params
    return (
     <View >
        <ToolBar navigator={this.props.navigator} route={this.props.route}/>
        <Button
          onPress={ () => this.controllHandler()}
          title={ controll === 'pause' ? '播放' : '暂停' }
          color="#841584" width={100}
        />
        <ScrollView>
          <Image style={Styles.style_image} source={{uri: imgurl2}} />
          {
            currentMusic.krc.map( (item,index) => <View style={Styles.krc} key={index}><Text>{item.str}</Text></View> )
          }
        </ScrollView>

        
      </View>
    )
  }
}

/**
* 播放列表详情组件
*/
// class Item extends Component { 
//   render() {
//       const {name,hash,play} = this.props
//       return (
//         <div  onClick={()=>play( hash )} style={{ padding:'1rem' }}>
//           {name}
//         </div>
//       )
//   }
// }

function map(state) {
  return {
    musicPlayList: state.music.musicPlayList,
    currentMusic: state.music.currentMusic,
    controll:state.music.controll,
    time:state.music.time
  }
}

const Styles = StyleSheet.create({
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
  krc:{
    alignItems: 'center',
    padding:10
  }
});

export default connect(map)(Play)
