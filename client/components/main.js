var React = require('react');
var Header = require('./parts/header');

var main = React.createClass({
	getInitialState() {
		return {title: 'React Title'};
	},
	componentWillMount() {
	},
	render() {
		return (
			<div>
				<Header {...this.state}/>
				{React.cloneElement(this.props.children, {
					title: this.state.title
				})}
			</div>
		);
	}
});

module.exports = main;
