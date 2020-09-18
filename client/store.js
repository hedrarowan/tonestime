import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import React from 'react'
import thunkMiddleware from 'redux-thunk'

const WELCOME_MESSAGE = 'WELCOME_MESSAGE'

export const welcomeMessage = (message) => {
    return {
        type: WELCOME_MESSAGE,
        message: message, 
    }
}

const initialState = {
    message: '',
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case WELCOME_MESSAGE: {
            
            return {
                ...state,
                message: action.message
            }
        }
        default:
            return state; 
    }
}

const store = createStore(reducer, applyMiddleware(loggerMiddleware, thunkMiddleware))

export default store; 