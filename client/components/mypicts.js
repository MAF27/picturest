var React = require('react');
var $ = require('jquery');

var MyPicts = React.createClass({
	getInitialState() {
		return ({picts: []});
	},
	componentDidMount() {
		this.serverRequest = $.ajax({
			url: '/api/mypicts',
			dataType: 'json',
			type: 'GET',
			success: function(data) {
				this.setState({picts: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error('Error getting picts: ', status, err.toString());
			}.bind(this)
		});
		return null;
	},
	componentWillUnmount() {
		this.serverRequest.abort();
	},
	delete(id) {
		// Find index -> TODO: to util
		var newpicts = this.state.picts;
		for (var i = 0; i < newpicts.length; i++) {
			if (newpicts[i]._id === id) {
				newpicts.splice(i, 1);
				console.log('Found on pos ' + i, newpicts);
			}
			this.setState({picts: newpicts});
			$.ajax({
				url: '/api/pict',
				dataType: 'json',
				type: 'DELETE',
				data: {_id: id},
				success: function(data) {
					this.setState({picts: data});
				}.bind(this),
				error: function(xhr, status, err) {
					console.error('Error getting picts: ', status, err.toString());
				}.bind(this)
			});
		}
		return null;
	},
	render: function() {
		if (this.state.picts.length) {
			return (
				<div id='mypicts' data-uk-grid >

					{[...this.state.picts].map((x) => <div>
						<div className='uk-panel'>
							<img src={x.pict.url}></img>
							Huhu
						</div>
					</div>)}

				</div >
			);
			} else {
				return (
					<div>None ...</div>
				);
			}
		}
	});

	module.exports = MyPicts;
