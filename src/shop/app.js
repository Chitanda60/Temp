/**
 * Created by shemei
 */

import { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import routes from './routes'

import Style from './styles/base.scss'

routes.component = (props) => {
    return (
        <div>
            { props.children }
        </div>
    )
};

const Routes = (
	<Router history={ hashHistory } routes={ routes } />
)

const dom = document.getElementById('app');
if ( dom ) {
    ReactDOM.render( Routes, dom )
    console.log('Hello DUI ~ version: 0.1')
}
