var React = require('react');
var reactDOM = require('react-dom');

var JoinSpeaker = React.createClass({

	start() {
		var speakerName = reactDOM.findDOMNode(this.refs.name).value;
		var title = reactDOM.findDOMNode(this.refs.title).value;
		this.props.emit('start', {name: speakerName, title: title});
	},
	render: function() {
		return (
			<form action='javascript:void(0)' onSubmit={this.start}>
				<label>Full Name</label>
				<input ref='name' className='form-control' placeholder='Enter your full name ...' required></input>
				<label>Presentation Title</label>
				<input ref='title' className='form-control' placeholder='Enter the title of your presentation ...' required></input>
				<button className='btn btn-primary'>Join</button>
			</form>
		);
	}
});

module.exports = JoinSpeaker;
