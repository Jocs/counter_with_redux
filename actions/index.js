export const COUNTER_INCREASE = 'COUNTER_INCREASE'
export const COUNTER_DECREASE = 'COUNTER_DECREASE'

export function increaseCounter() {
	return {
		type: COUNTER_INCREASE
	}
}

export function decreaseCounter() {
	return {
		type: COUNTER_DECREASE
	}
}
export function increaseIfOdd() {
	return (dispach, getState) => {
		const { counter } = getState()
		if( counter % 2 === 0)
			return
		dispach(increaseCounter())
	}
}

export function increaseAsync(delay = 1000) {
	return (dispach) => {
		setTimeout(() => dispach(increaseCounter()), delay)
	}
}
