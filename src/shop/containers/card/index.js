/**
 * Created by shemei
 */

import { Component } from 'react'

import CSSModules from 'react-css-modules'
import {seq} from 'immutable'
import {immutableRenderDecorator} from 'react-immutable-render-mixin'

import SC1 from '../../components/Card/SC1'
import SC2 from '../../components/Card/SC2'

import Style from './index.scss'

@immutableRenderDecorator
@CSSModules(Style, {allowMultiple: true})
class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '蛇莓',
			age: 24
		}
	}

	shouldComponentUpdate(nextProps, nextState) {
		this.setState({
			age: 25
		})
	}

	componentWillUpdate(nextProps, nextState) {
		this.setState({
			age: 25
		})
	}

	onAlert() {
		this.setState({name: '织夏'})
	}

	render() {
		const {name, age} = this.state		

		return (
			<div styleName="card">
				<div styleName="card-dd">这是卡片详情</div>
				<div>{name}</div>
				<SC1 age={age} />
				<SC2 />
				<div onClick={::this.onAlert}>点击</div>
			</div>			
		)
	}
}

export default Card