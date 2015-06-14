var app = app || {};

app.item = Backbone.Model.extend({

	defaults: {
		title: "(empty)",
		done: false
	}

});