var React = require('react');
var Link = require('react-router').Link;

var Example2 = React.createClass({

	render: function() {
		return (
			<div>
				<p>Hullo there from React</p>
				<Link to='/'>Go to Home</Link>
			</div>
		);
	}

});

module.exports = Example2;
