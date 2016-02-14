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
		console.log('State, flag: ', this.state, this.state.picts.length >0);

				return (
					<div className='uk-grid-width-small-1-2 uk-grid-width-medium-1-3 uk-grid-width-large-1-4 gallery' data-uk-grid='{gutter: 20}' >

						{[...this.state.picts].map((x, i) => <div key={i}>
							<div className='uk-panel uk-panel-box'>
								<div className='uk-panel-teaser'>
									<ImageLoader src={x.pict.url}>
										<img src='images/placeholder.svg'/>
									</ImageLoader>
									</div>
								<p>{x.pict.title}</p>
							</div>
						</div>)}

					</div >
				);
			}
	});

	module.exports = AllPicts;
