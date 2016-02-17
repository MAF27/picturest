/* global $ */
var React = require('react');
import ImageLoader from 'react-imageloader';

var Title = React.createClass({
	render: function() {
		if (this.props.filter) {
			return (
				<h2>{this.props.filter}{'\u0027s Pics'}</h2>
			);
		} else {
			return (
				<h2>All Pics</h2>
			);
		}
	}
});

var AllPicts = React.createClass({
	getInitialState() {
		return ({picts: [], filterId: null, filterName: null});
	},
	componentDidMount() {
		this.serverRequest = $.ajax({
			url: '/api/allpicts',
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
	filterPicts(user) {
		this.setState({filterId: user.userId, filterName: user.twitterName});
	},
	render: function() {
				return (
					<div>
					<Title filter={this.state.filterName} />
					<div className='gallery'>
						{[...this.state.picts].map((x, i) =>
							(!this.state.filterId || x.user.userId === this.state.filterId) ?
								<figure key={i}>
										<ImageLoader src={x.pict.url}>
											<img src='images/placeholder.png'/>
										</ImageLoader>
									<figcaption>{x.pict.title}</figcaption>
									<a onClick={this.filterPicts.bind(this, x.user)} className='user'>{x.user.twitterName}</a>
								</figure>
								:
								<span key={i}></span>
						)}
					</div>
					</div >
				);
			}
	});

	module.exports = AllPicts;
