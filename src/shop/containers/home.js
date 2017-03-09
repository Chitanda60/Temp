/**
 * Created by shemei
 */

import {Component, PropTypes} from 'react'
import {findDOMNode} from 'react-dom'
import {compose, pure, onlyUpdateForKeys} from 'recompose'

import Son1 from '../components/Son1'
import Son2 from '../components/Son2'
import Son3 from '../components/Son3'
import Son4 from '../components/Son4'

import Style from './home.scss'

const MyContainer = (WrappedComponent) => {
	return class extends Component {
		componentWillMount() {
			console.log('这是逻辑包裹层')
		}

		render() {
			return (
				<WrappedComponent {...this.props} />
			)
		}
	}
}

const MyContainer_2 = (WrappedComponent) => {
	return class extends Component {
		componentWillMount() {
			console.log('这是逻辑包裹层2')
		}

		render() {
			return (
				<WrappedComponent {...this.props} />
			)
		}
	}
}

const MyContainer2 = (WrappedComponent) => {
	return class extends WrappedComponent {
		render() {
			return super.render()
		}
	}
}

const HO_Son4 = compose(MyContainer, MyContainer_2)(Son4)
const HO_Son4_2 = MyContainer2(Son4)

class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '蛇莓',
			age: 24,
			email: 'shemei@shemei.com',
			show: false
		}
	}	

	getChildContext() {
		return {
			color: 'red'
		}
	}

	onAlert() {	
		const {show} = this.state
		this.setState({
			show: !show
		})
	}	

	componentDidMount() {
		const son1_ins1 = this.refs.son1;
		const son1_ins2 = ReactDOM.findDOMNode(son1_ins1)		

		document.body.addEventListener('click', (e) => {
			if (e.target && e.target.matches('div#forbidden_area')) {
				return;
			}
			
			this.setState({
				show: false
			})
		})

		// emitter.addListener('someDonw', (msg, data) => {
		// 	console.log(data)
		// })

	}

	componentWillReceiveProps(nextProps) {
		// console.log('componentWillReceiveProps')
	}

	shouldComponentUpdate(nextProps, nextState) {
		// console.log('shouldComponentUpdate')
		return true
	}

	componentWillUpdate(nextProps, nextState) {
		// console.log('componentWillUpdate')
	}

	componentDidUpdate(prevProps, prevState) {
		// console.log('componentDidUpdate')		
		// const dom = ReactDOM.findDOMNode(this)
		// console.log(dom)
	}

	render() {
		const {name, age, email, show} = this.state;
		
		return (
			<div className={Style.home + ' ' + Style['fw-bold']}>
				<a href="">你好</a>
				<Son2 age={age} />
				<Son3 ref="son1" email={email} />				
				<Son1 name={name} />
				<HO_Son4 />
				<HO_Son4_2 />
				<div className={Style.button} onClick={::this.onAlert}>点击</div>
				{
					show ? (<div id="forbidden_area" className={Style['forbidden_area']}></div>) : null
				}
			</div>
		)
	}
}
Home.childContextTypes = {
	color: PropTypes.string
}

export default Home