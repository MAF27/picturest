var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var Join = React.createClass({
	join() {
		var memberName = ReactDOM.findDOMNode(this.refs.name).value;
		this.props.emit('join', {name: memberName});
	},
	render: function() {
		return (
			<form action='javascript:void(0)' onSubmit={this.join}>
				<label>Full Name</label>
				<input ref='name' className='form-control' placeholder='Enter your full name ...' required></input>
				<button className='btn btn-primary'>Join</button>
				<Link to='/speaker'>Join as speaker</Link>
			</form>
		);
	}

});

module.exports = Join;
