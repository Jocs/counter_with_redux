import { combineReducers } from 'redux'
import { COUNTER_INCREASE,
 				COUNTER_DECREASE, 
 				increaseCounter, 
 				decreaseCounter } from '../actions'

function counter(state = 0, action) {
	switch(action.type) {
		case COUNTER_INCREASE:
			return state + 1
		case COUNTER_DECREASE:
			return state - 1
		default:
			return state
	}
}

const rootReducer = combineReducers({
	counter
})

export default rootReducer