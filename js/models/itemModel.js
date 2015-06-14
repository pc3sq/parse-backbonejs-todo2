var app = app || {};

app.item = Backbone.Model.extend({

	defaults: {
		title: "(empty)",
		done: false
	},

	initialize: function() {
		console.log("An item entitled" + this.get("title") + "has been created.");
	},

	checkAsDone: function() {
		if (this.get("done") == false) {
      this.save({done: true)});
		} else {
			alert(this.get("title") + " is done. Completed items cannot be undone." );
		}

});