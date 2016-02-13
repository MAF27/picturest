var React = require('react');

var g = [
	{
		src: 'http://lorempixel.com/400/200'
	}, {
		src: 'http://lorempixel.com/400/200'
	}, {
		src: 'http://lorempixel.com/400/200'
	}, {
		src: 'http://lorempixel.com/400/200'
	}, {
		src: 'http://lorempixel.com/400/200'
	}, {
		src: 'http://lorempixel.com/400/200'
	}, {
		src: 'http://lorempixel.com/400/200'
	}, {
		src: 'http://lorempixel.com/400/200'
	}, {
		src: 'http://lorempixel.com/400/200'
	}, {
		src: 'http://lorempixel.com/400/200'
	}, {
		src: 'http://lorempixel.com/400/200'
	}, {
		src: 'http://lorempixel.com/400/200'
	}
];

var Gallery = React.createClass({
	render: function() {
		return (
			<div id='gallery' className='uk-grid-width-small-1-2 uk-grid-width-medium-1-3 uk-grid-width-large-1-4' data-uk-grid >

				{[...g].map((x) => <div>
					<div className='uk-panel'>
						<img src={x.src}></img>
					</div>
				</div>)}

			</div >
		);
	}
});

module.exports = Gallery;

// <div id='gallery' className='uk-grid-width-small-1-2 uk-grid-width-medium-1-3 uk-grid-width-large-1-4 tm-grid-colors tm-grid-heights' data-uk-grid >
