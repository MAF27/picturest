var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
var IndexRoute = require('react-router').IndexRoute;

var Main = require('./components/main');
var AddForm = require('./components/add');
var MyPicts = require('./components/mypicts');
var AllPicts = require('./components/allpicts');
var Whoops404 = require('./components/whoops404');

var reactContainer = document.getElementById('react-container');

if (reactContainer) {
	ReactDOM.render((
		<div>
		<Router history={browserHistory}>
			<Route path='/' component={Main}>
				<IndexRoute component={AllPicts} />
				<Route path='add' component={AddForm} />
				<Route path='mypicts' component={MyPicts} />
				<Route path='*' component={Whoops404} />
			</Route>
		</Router>
		</div>
	), document.getElementById('react-container'));
}
