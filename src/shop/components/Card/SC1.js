import {Component} from 'react'

class SC1 extends Component {
	constructor(props) {
		super(props);
		this.state = this.props
	}

	render() {
		const {age} = this.state
		console.log('SC1 render')

		return (
			<div>{age}</div>
		)
	}
}

export default SC1