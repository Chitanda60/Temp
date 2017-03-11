import {Component} from 'react'
import Immutable from 'immutable'
import Cursor from 'immutable/contrib/cursor'

// let data = Immutable.fromJS({
// 	a: {
// 		b: {
// 			c: 1
// 		}
// 	}
// })
// let cursor = Cursor.from(data, ['a', 'b'], newData => {
// 	console.log(newData)
// })
// console.log(cursor.get('c'))
// cursor = cursor.update('c', x => x + 1)
// console.log(cursor.get('c'))

const {Map} = Immutable

class Son6 extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			data: Map({times: 0})
		}		
	}

	handleAdd() {
		// Immutable方式的更新state
		this.setState(({data}) => ({data: data.update('times', v => v + 1)}))
		// this.setState(function({data}){
		// 	const newData = data.update('times', function(v){
		// 		return v + 1
		// 	})			
		// 	return {
		// 		data: newData
		// 	}
		// })
	}

	render() {
		const {data} = this.state		
		console.log('Son6 render')
		
		return (
			<div onClick={this.handleAdd.bind(this)}>Son6</div>
		)
	}
}

export default Son6