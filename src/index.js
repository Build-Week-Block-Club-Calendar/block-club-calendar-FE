import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './utils/theme';
import ScrollToTop from './utils/ScrollToTop'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// import MomentUtils from '@date-io/moment';
// import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// redux devtools integration
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create store
const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk, logger))
);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            {/* <MuiPickersUtilsProvider utils={MomentUtils}> */}
                <Router>
                    <ScrollToTop />
                    <CssBaseline />
                    <App />
                </Router>
            {/* </MuiPickersUtilsProvider> */}
        </ThemeProvider>
    </Provider>, 
    rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
