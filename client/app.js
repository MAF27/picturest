var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
var IndexRoute = require('react-router').IndexRoute;

var Main = require('./components/main');
var Gallery = require('./components/gallery');
var Gallery2 = require('./components/gallery2');
var AddForm = require('./components/add');
var MyPicts = require('./components/mypicts');
var AllPicts = require('./components/allpicts');
var Example = require('./components/example');
var Example2 = require('./components/example2');
var Whoops404 = require('./components/whoops404');

var reactContainer = document.getElementById('react-container');

if (reactContainer) {
	ReactDOM.render((
		<Router history={browserHistory}>
			<Route path='/' component={Main}>
				<IndexRoute component={AllPicts} />
				<Route path='example2' component={Example2} />
				<Route path='gallery' component={Gallery} />
				<Route path='gallery2' component={Gallery2} />
				<Route path='add' component={AddForm} />
				<Route path='mypicts' component={MyPicts} />
				<Route path='*' component={Whoops404} />
			</Route>
		</Router>
	), document.getElementById('react-container'));
}
