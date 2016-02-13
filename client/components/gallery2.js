var React = require('react');

var Gallery = React.createClass({
	render: function() {
		return (
			<div id='gallery' className='uk-grid-width-small-1-2 uk-grid-width-medium-1-3 uk-grid-width-large-1-4 tm-grid-colors tm-grid-heights' data-uk-grid='' style={{
				position: 'relative',
				height: '390px'
			}}>
				<div data-grid-prepared='true' style={{
					position: 'absolute',
					'boxSizing': 'border-box',
					top: '0px',
					left: '0px',
					opacity: '1'
				}}>
					<div className='uk-panel'>1
						<img src='http://cdn.theatlantic.com/assets/media/img/mt/2016/01/RTR4SE0E/facebook.jpg?1453486606'></img>
					</div>
				</div>
				<div data-grid-prepared='true' style={{
					position: 'absolute',
					'boxSizing': 'border-box',
					top: '0px',
					left: '166.312px',
					opacity: '1'
				}}>
					<div className='uk-panel'>2
						<img src='http://images.inc.com/uploaded_files/image/970x450/getty_459878353_9707279704500130_78844.jpg'></img>
					</div>
				</div>
				<div data-grid-prepared='true' style={{
					position: 'absolute',
					'boxSizing': 'border-box',
					top: '0px',
					left: '332.624px',
					opacity: '1'
				}}>
					<div className='uk-panel'>3
						<img src='http://www.ycombinator.com/images/ycombinator-logo-fb889e2e.png'></img>
					</div >
				</div>
				<div data-grid-prepared='true' style={{
					position: 'absolute',
					'boxSizing': 'border-box',
					top: '0px',
					left: '498.936px',
					opacity: '1'
				}}>
					<div className='uk-panel'>4
						<img src='http://rack.1.mshcdn.com/media/ZgkyMDE1LzEyLzE1LzY3LzEwMEFwcHNHcmlkLmE5ZmNlLmpwZwpwCXRodW1iCTEyMDB4NjI3IwplCWpwZw/c5c8518a/551/100-Apps-Grid1.jpg'></img>
					</div>
				</div>
				<div data-grid-prepared='true' style={{
					position: 'absolute',
					'boxSizing': 'border-box',
					top: '120px',
					left: '0px',
					opacity: '1'
				}}>
					<div className='uk-panel'>5</div >
				</div>
				<div data-grid-prepared='true' style={{
					position: 'absolute',
					'boxSizing': 'border-box',
					top: '140px',
					left: '166.312px',
					opacity: '1'
				}}>
					<div className='uk-panel'>6</div>
				</div>
				<div data-grid-prepared='true' style={{
					position: 'absolute',
					'boxSizing': 'border-box',
					top: '0px',
					left: '443.624px',
					opacity: '1'
				}}>
					<div className='uk-panel'>7</div >
				</div>
				<div data-grid-prepared='true' style={{
					position: 'absolute',
					'boxSizing': 'border-box',
					top: '1600px',
					left: '498.936px',
					opacity: '1'
				}}>
					<div className='uk-panel'>8</div>
				</div>

			</div >
		);
	}
});

module.exports = Gallery;
