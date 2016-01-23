var React = require('react');

var Header = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},
	getDefaultProps() {
		return ({title: 'Sample Title'});
	},
	render() {
		return (
			<header className='row'>
				<div className='col-xs-10'>
					<h1>{this.props.title}</h1>
					<p>{this.props.speaker}</p>
				</div>
			</header>
		);
	}
});

module.exports = Header;
