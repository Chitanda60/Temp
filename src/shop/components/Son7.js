import {Component} from 'react'
import createFragment from 'react-addons-create-fragment'

const Son7_Mix = ({first, second}) => {
	const children = createFragment({
		first: first,
		second: second
	})

	return (
		<div>
			{children}
		</div>
	)
}

class Son7 extends Component {
	constructor(props) {
		super(props);
		this.state = this.props
	}

	render() {
		const {first, second} = this.state
		// const lnode = first.map(item => <li>{item}</li>)
		// const rnode = second.map(item => <li>{item}</li>)
		// const nodeDom = rnode.reduce((pre, val) => {
		// 	pre.push(val)
		// 	return pre
		// }, lnode)
		// const node = rank({first, second})
		// const Son7_Mix = rank(Son7_1, Son7_2)
		const A = (<div>Son7_1</div>)
		const B = (<div>Son7_2</div>)
		
		return (
			<div>
				<Son7_Mix first={A} second={B} />
			</div>
		)
	}
}

export default Son7