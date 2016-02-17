/* global $ */
var React = require('react');
import ImageLoader from 'react-imageloader';

var MyPicts = React.createClass({
	// ask for `router` from context
	contextTypes: {
		router: React.PropTypes.object
	},
	getInitialState() {
		return ({picts: []});
	},
	componentWillMount() {
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
	},
	componentWillUnmount() {
		this.serverRequest.abort();
	},
	delete(id) {
		// Find index -> TODO: to util
		var newpicts = this.state.picts;
		var index = -1;
		console.log('Deleting ' + id);
		for (var i = 0; i < newpicts.length; i++) {
			if (newpicts[i]._id === id) {
				index = i;
			}
		}

		if (index > 0) {
			// Delete pict in React component
			newpicts.splice(index, 1);
			this.setState({picts: newpicts});
			// Delete pict in database
			$.ajax({
				url: '/api/pict',
				dataType: 'json',
				type: 'DELETE',
				data: {_id: id},
				success: function() {
				}.bind(this),
				error: function(xhr, status, err) {
					console.error('Error deleting pict: ', status, err.toString());
				}.bind(this)
			});
		}
	},
	generateContent() {
		return (
			<div>
			<h2>My Pics</h2>
			<div id='mypicts' className='gallery'>

				{[...this.state.picts].map((x, i) =>
					<figure key={i}>
							<ImageLoader src={x.pict.url}>
								<img src='images/placeholder.png'/>
							</ImageLoader>
						<figcaption>{x.pict.title}</figcaption>
						<a onClick={this.delete.bind(this, x._id)}>Delete</a>
				</figure>)}

			</div >
			</div>
		);
	},
	render: function() {
		if (this.state.picts.length > 0) {
			return (this.generateContent());
		} else {
			return (
				<i className="uk-icon-spinner uk-icon-spin"></i>
			);
		}
	}
});

module.exports = MyPicts;
