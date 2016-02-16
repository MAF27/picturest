/* global $ */
var React = require('react');
// var PropTypes = React.PropTypes;

var AddForm = React.createClass({
	// ask for `router` from context
	contextTypes: {
		router: React.PropTypes.object
	},
	onChange(e) {
		this.setState({[e.target.name]: e.target.value});
	},
	onSubmit(e){
		e.preventDefault();

		// Save pict
		$.ajax({
			url: '/api/pict',
			dataType: 'json',
			type: 'POST',
			data: this.state,
			success: function(data) {
				console.log('Add result: ' + data);
				this.context.router.push('/mypicts');
			}.bind(this),
			error: function(xhr, status, err) {
				console.error('Error saving pict', status, err.toString());
			}.bind(this)
		});

		// Redirect to My Picst
		// window.location = '/mypicts';
		this.context.router.push('/mypicts');
	},
	render: function() {
		return (
			<form action="" className="uk-form uk-form-horizontal" onSubmit={this.onSubmit}>
        <div className="uk-form-row">
            <label className="uk-form-label">Title</label>
            <div className="uk-form-controls">
                <input type="text" name="title" placeholder="Title" onChange={this.onChange}/>
            </div>
        </div>
        <div className="uk-form-row">
            <label className="uk-form-label">Picture Address</label>
            <div className="uk-form-controls">
                <input type="text" name="url" placeholder="URL" onChange={this.onChange} className="uk-form-width-large"/>
            </div>
        </div>
				<input className="uk-button" type="submit" value="Submit" />
    </form>
		);
	}

});

module.exports = AddForm;
