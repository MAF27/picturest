var React = require('react');
var Display = require('./parts/display');
var JoinSpeaker = require('./parts/joinSpeaker');

var Speaker = React.createClass({

	render: function() {
		console.log('Type: ', this.props.member);

		return (
			<div>
				<Display if={this.props.status === 'connected'}>
					<Display if={this.props.member.name && this.props.member.type === 'speaker'}>
						<p>Questions</p>
						<p>Attendance</p>
					</Display>
					<Display if={!this.props.member.name}>
						<h2>Start the Presentation</h2>
						<JoinSpeaker emit={this.props.emit} />
					</Display>
				</Display>

			</div>
		);
	}

});

module.exports = Speaker;
