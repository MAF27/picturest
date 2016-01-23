var ReactDOM = require('react-dom');
var React = require('react');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
var IndexRoute = require('react-router').IndexRoute;

var App = require('./components/app');
var Audience = require('./components/audience');
var Speaker = require('./components/speaker');
var Board = require('./components/board');
var Whoops404 = require('./components/whoops404');


ReactDOM.render((
	<div>
		<p>Hello from React</p>
		<p>So glad to be here</p>
		
	</div>
), document.getElementById('react-container'));
