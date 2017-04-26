import React, {Component} from 'react';
import { Provider } from 'react-redux';

import App from './app';
import configureStore from './stores';

export default class Setup extends Component {

  constructor() {
    super();
    this.state = {
      store: configureStore()
    }
  }

  render() {
     return (
        <Provider store={this.state.store}>
          <App/>
        </Provider>
      )
  }
  
}