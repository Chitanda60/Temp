import {Component} from 'react'

class Son5 extends Component {
	render() {
		const cls = {color: 'red'}
		console.log('Son5 render')

		return (
			<div style={cls}>Son5</div>
		)
	}
}

export default Son5