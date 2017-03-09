import {Component, PropTypes} from 'react'

class Son3 extends Component {
	constructor(props) {
		super(props);
		
		this.state = props
	}

	getContext() {
		return {
			color: 'red'
		}
	}

	render() {
		const {email} = this.state;
		const {color} = this.context;

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