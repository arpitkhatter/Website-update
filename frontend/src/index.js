import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Amplify from 'aws-amplify';
import './assets/font-awesome/css/font-awesome.min.css';
import { ThemeProvider, createTheme} from '@material-ui/core';

const config = require('./config.json');


Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  }
});

const theme = createTheme ({
  typography : {
    h1 : {
      fontFamily: ['"Poppins"', 'sans-serif'].join(',')
    },
    h3 : {
      fontFamily: ['"Open Sans"', 'sans-serif'].join(',')
    },
    h5 : {
      fontFamily: ['"Open Sans"', 'sans-serif'].join(',')
    },
    h6 : {
      fontFamily: ['"Open Sans"', 'sans-serif'].join(',')
    }
  }
})


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  
  document.getElementById('root')
);

