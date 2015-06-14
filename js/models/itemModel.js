var app = app || {};

app.item = Backbone.Model.extend({

	defaults: {
		title: "(empty)",
		done: false
	},

	initialize: function() {
		console.log("An item entitled" + this.get("title") + "has been created.");
	}

});