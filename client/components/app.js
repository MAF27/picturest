var React = require('react');
var io = require('socket.io-client');
var Header = require('./parts/header');

var app = React.createClass({
	getInitialState() {
		return ({status: 'disconnected', title: '', member: {}, audience: [], speaker: ''});
	},
	componentWillMount() {
		this.socket = io('http://localhost:3000');
		this
			.socket
			.on('connect', this.connect)
			.on('welcome', this.updateState)
			.on('joined', this.joined)
			.on('audience', this.updateAudience)
			.on('start', this.start)
			.on('end', this.updateState)
			.on('disconnect', this.disconnect);
	},
	emit(eventName, payload) {
		this
			.socket
			.emit(eventName, payload);
	},
	connect() {
		var member = sessionStorage.member
			? JSON.parse(sessionStorage.member)
			: null;
		if (member && member.type === 'audience') {
			this.emit('join', member);
		} else if (member && member.type === 'speaker') {
			this.emit('start', {
				name: member.name,
				title: sessionStorage.title
			});
		}
		this.setState({status: 'connected'});
	},
	updateState(serverState) {
		this.setState(serverState);
	},
	joined(member) {
		sessionStorage.member = JSON.stringify(member);
		this.setState({member: member});
	},
	updateAudience(newAudience) {
		this.setState({audience: newAudience});
	},
	start(presentation) {
		if (this.state.member.type === 'speaker') {
			sessionStorage.title = presentation.title;
		}
		this.setState(presentation);
	},
	disconnect() {
		this.setState({status: 'disconnected', title: 'disconnected', speaker: ''});
	},
	render() {
		return (
			<div>
				<Header {...this.state}/>
				{React.cloneElement(this.props.children, {
					member: this.state.member,
					emit: this.emit,
					title: this.state.title,
					status: this.state.status,
					audience: this.state.audience,
					speaker: this.state.speaker
				})}
			</div>
		);
	}
});

module.exports = app;
