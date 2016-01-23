var React = require('react');
var Link = require('react-router').Link;

var Example = React.createClass({

	render: function() {
		return (
			<div>
				<p>Hello from React</p>
				<Link to='/example2'>Go to example 2</Link>
			</div>
		);
	}

});

module.exports = Example;
