/* global $ */
var React = require('react');
import ImageLoader from 'react-imageloader';

var AllPicts = React.createClass({
	getInitialState() {
		return ({picts: []});
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
	render: function() {
				return (
					<div className='gallery'>

						{[...this.state.picts].map((x, i) =>
							<figure key={i}>
									<ImageLoader src={x.pict.url}>
										<img src='images/placeholder.png'/>
									</ImageLoader>
								<figcaption>{x.pict.title}</figcaption>
						</figure>)}

					</div >
				);
			}
	});

	module.exports = AllPicts;
