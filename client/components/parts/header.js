var React = require('react');

var Header = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},
	getDefaultProps() {
		return ({title: 'Sample Title'});
	},
	render() {
		return ( null
		);
	}
});

module.exports = Header;
