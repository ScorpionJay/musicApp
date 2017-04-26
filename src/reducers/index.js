import { combineReducers } from 'redux'
import  home from './home'
import  login from './login'
import  message from './message'
import  account from './account'
import  album from './album'
import  music from './music'

const reducers = combineReducers({
  home,login,message,account,album,music
})

export default reducers