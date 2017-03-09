import {Component} from 'react'

class Son3 extends Component {
	constructor(props) {
		super(props);
		
		this.state = props
	}

	render() {
		const {email} = this.state;

		return (
			<div>{email}</div>
		)
	}
}

export default Son3