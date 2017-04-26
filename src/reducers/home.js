import { combineReducers } from 'redux'
import { HOME } from '../actions/home'

let homeVo = {
  banner:[
    {
      imgurl: "http://imge.kugou.com/mobilebanner/20170424/20170424194918328166.jpg",
      title: "薛之谦",
      id: 5845,
      type: 2,
      extra: {
        albumname: "我害怕",
        imgurl: "http://imge.kugou.com/stdmusic/{size}/20170424/20170424180421385803.jpg",
        privilege: 0,
        albumid: 2104644,
        singerid: 3060,
        singername: "薛之谦",
        intro: "",
        publishtime: "2017-04-25"
      },
    }
  ],
  recommendMusics: [
    {
      "collectcount":0,
      "imgurl":"",
      "intro":"",
      "playcount":0,
      "publishtime":"",
      "singername":"",
      "slid":0,
      "songcount":0,
      "specialid":0,
      "specialname":"",
      "suid":0,
      "username":"",
      "verified":0
    }
  ]
}


function home(state = homeVo, action) {
  switch (action.type) {
    case HOME:
      return action.obj
    default:
      return state
  }
}

const Reducers = combineReducers({
  home
})

export default Reducers