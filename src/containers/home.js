import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  RefreshControl
} from 'react-native';

import ToolBar from '../common/ToolBar'
import CarouselCompont from '../common/RNCarousel'
import RecommendList from '../components/music/recommendList'

import { connect } from 'react-redux'
import { homeAPI } from '../actions/home'

class Home extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      isRefreshing:false
    };
  }

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(homeAPI())
  }
  
  async reflesh(){
    this.setState({isRefreshing: true})
    const { dispatch } = this.props
    await dispatch(homeAPI())
    this.setState({isRefreshing: false})
  }

  render() {
    return (
      <View>
        <ToolBar navigator={this.props.navigator} route={this.props.route}/>
        <ScrollView  style={styles.container} refreshControl={
            <RefreshControl onRefresh={() => this.reflesh()}
              tintColor="#ff0000"
              refreshing={this.state.isRefreshing}
            /> }>
              <CarouselCompont navigator={this.props.navigator} route={this.props.route} data={this.props.data.banner}/>
              <View>
                <RecommendList navigator={this.props.navigator} route={this.props.route} data={this.props.data.recommendMusics}/>
              </View>
            
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom:40
  },
})


function map(state) {
  return {
    data: state.home.home
  }
}

export default connect(map)(Home)
