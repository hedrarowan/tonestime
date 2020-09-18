// import '../public/index.css'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import  Main  from './components/Main'
import store from './store'


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Main store={store}/>
        </Router>
    </Provider>,
    document.getElementById('app')
)