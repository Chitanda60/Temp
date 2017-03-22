
import {Component, PropTypes} from 'react'

class Son8 extends Component {
	constructor(props, context) {
		// 继承Component的参数
		super(props, context);		
	}

	onChange() {
		console.log(this)
		// console.log(props)
	}

	render() {
		const {name} = this.props
		
		return <div onClick={::this.onChange}>{name}</div>
	}
}

Son8.contextTypes = {
	color: PropTypes.string
}

export default Son8