import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const theme = createMuiTheme({
  /*palette: {
    type: "dark",
    primary: {
      main: '#90caf9',
      light: '#c3fdff',
      dark:'#5d99c6'
    },
    secondary: {
      main: '#ef9a9a',
      light: '#ffcccb',
      dark:'#ba6b6c'
    }
  }*/
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
