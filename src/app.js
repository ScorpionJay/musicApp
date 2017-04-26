import React , { Component } from 'react'
import { View,Text,StyleSheet,Dimensions} from 'react-native'
import { connect } from 'react-redux'

import Navigator from './Navigator'
import Message from './components/Message'
import { hideMessage } from './actions/message'

import Video from 'react-native-video'

const width = Dimensions.get('window').width ;

class App extends Component {

  render() {
    const { dispatch,message,currentMusic,controll } = this.props

    return (
        <View style={styles.container}>
          <Navigator />
          <Message style={styles.message} data={message} onHideMessage={()=>dispatch(hideMessage())}/>
          <Video
              source={{ uri: currentMusic.url }}
              playInBackground={true}
              repeat={true} 
              rate={0}
              paused={controll === 'pause'}
              style={styles.backgroundVideo}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  message: {
    zIndex:100
  },
  backgroundVideo:{
    // width:width,
    // height:100
  }
})

function map(state) {
  return {
    message: state.message.message,
    musicPlayList: state.music.musicPlayList,
    currentMusic: state.music.currentMusic,
    controll:state.music.controll
  }
}

export default connect(map)(App)