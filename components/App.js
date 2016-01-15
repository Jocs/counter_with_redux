import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CounterActions from '../actions'
import Counter from './Counter'

function mapStateToProps({counter}) {
	return {counter}
}

function mapDispatchToActions(dispatch) {
	return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToActions)(Counter)