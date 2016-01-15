import React, { Component, PropTypes } from 'react'

class Counter extends Component {
	constructor(props){
		super(props)
	}

	render() {
		const { increaseCounter, 
			decreaseCounter,
			increaseIfOdd,
			increaseAsync,
			counter } = this.props
		return (
			<div>
				<h2>{counter}</h2>
				<input type='button' value='increase' onClick={increaseCounter}/>
				<input type='button' value='decrease' onClick={decreaseCounter}/>
				<input type='button' value='increaseIfOdd' onClick={increaseIfOdd}/>
				<input type='button' value='increaseAsync' onClick={() => increaseAsync()}/>
			</div>
		)
	}
}

Counter.propTypes = {
	increaseCounter: PropTypes.func.isRequired,
	decreaseCounter: PropTypes.func.isRequired,
	increaseIfOdd: PropTypes.func.isRequired,
	increaseAsync: PropTypes.func.isRequired,
	counter: PropTypes.number.isRequired
}

export default Counter