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
		console.log('Ha! You want to delete my beautiful ' + id);

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
		if (this.state.picts.length > 0) {
			return (
			<div id = 'gallery' className = 'uk-grid-width-small-1-2 uk-grid-width-medium-1-3 uk-grid-width-large-1-4' data-uk-grid="{gutter: 15}" >
				{[...this.state.picts].map((x) =>
					<div key={x._id}>
					<div className='uk-panel-box'>
						<div className="uk-panel-teaser">
							<img src={x.pict.url} />
						</div>
						<p>{x.pict.title}</p>
						<a onClick={this.delete.bind(this, x._id)}>Delete</a>
					</div>
				</div>)
			}
			</div>
			);
			} else {
				return (
					<div>Loading ...</div>
				);
			}
		}
	});

	module.exports = MyPicts;
