import {Component, PureComponent, PropTypes} from 'react'
// 用PureComponent代替
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {is} from 'immutable'

class Son3 extends PureComponent {
	constructor(props) {
		super(props);
		
		this.state = props
		// 升级shouldComponentUpdate
		// this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
	}

	getContext() {
		return {
			color: 'red'
		}
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	const thisProps = this.props || {}
	// 	const thisState = this.state || {}

	// 	if (Object.keys(thisProps).length !== Object.keys(nextProps).length 
	// 		|| Object.keys(thisState).length !== Object.keys(nextState).length) {
	// 		return true
	// 	}

	// 	for (const key in nextProps) {
	// 		if (thisProps[key] !== nextProps[key] 
	// 			|| !is(thisProps[key], nextProps[key])) {
	// 			return true
	// 		}
	// 	}

	// 	for (const key in nextState) {
	// 		if (thisState[key] !== nextState[key] 
	// 			|| !is(thisState[key], nextState[key])) {
	// 			return true
	// 		}
	// 	}
	// }

	render() {
		const {email} = this.state
		const {color} = this.context		
		console.log('Son3 render')

		return (
			<div>
				<div>{email}</div>
				<div>{color}</div>
			</div>
		)
	}
}

Son3.contextTypes = {
	color: PropTypes.string
}

export default Son3