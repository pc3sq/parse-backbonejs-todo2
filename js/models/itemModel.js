var app = app || {};

app.Item = Parse.Object.extend("Item", {

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

app.ItemCollection = Parse.Object.extend({
	model: app.item,

	done: function() {
	  return this.where({done: true});
	},

	remaining: function() {
	  return this.where({done: false});
	}
	
});

app.items = new itemCollection;
app.items.query = new Parse.Query(Item);
app.items.fetch();