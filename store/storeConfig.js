import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducer'
import logger from 'redux-logger'

const createStoreWithMiddleware = applyMiddleware(thunk, logger())(createStore)

export default function storeConfig(initState) {
	const store = createStoreWithMiddleware(rootReducer, initState)
	return store
}