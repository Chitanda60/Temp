/**
 * Created by shemei
 */

import { Component } from 'react'
import { ReactCSSTransitionGroup } from 'react-addons-css-transition-group'

import Style from './index.scss'

class Animation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: true
		}
	}	

	hide() {
		this.setState({
			show: false
		})
	}

	render() {
		const {show} = this.state

		return show ? (
			<div>
				<ReactCSSTransitionGroup component="div" transitionName="example" transitionEnterTimeout={5000} transitionLeaveTimeout={3000}>
					<Son1 />
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={5000} transitionLeaveTimeout={3000}>
					<Son2 />
				</ReactCSSTransitionGroup>
				<div onClick={this.hide.bind(this)}>点击</div>
			</div>
		) : <div>蛇莓</div>		
	}
}

const Son1 = () => <div className="son1"></div>
const Son2 = () => <div className="son2"></div>

export default Animation