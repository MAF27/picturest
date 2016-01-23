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
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Audience} />
			<Route path='speaker' component={Speaker} />
			<Route path='board' component={Board} />
			<Route path='*' component={Whoops404} />
		</Route>
	</Router>
), document.getElementById('react-container'));
