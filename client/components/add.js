/* global $ */
var React = require('react');
// var PropTypes = React.PropTypes;

var AddForm = React.createClass({

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
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error('Error saving pict', status, err.toString());
			}.bind(this)
		});
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
                <input type="text" name="url" placeholder="URL" onChange={this.onChange} />
            </div>
        </div>
				<input className="uk-button" type="submit" value="Submit" />
    </form>
		);
	}

});

module.exports = AddForm;
