var app = app || {};

app.itemView = Backbone.View.extend({

	// which html tag each item should be place in, optional
	tagName: "article",

	// CSS classname, optional
	className: "item",

	// refers to the template by id in index.html
	template: _.template( $("#item-template").html()),

	render: function() {

		//doesn't know which model to look for yet ...
		var itemTemplate = this.template(this.model.toJSON());
		
		//$el uses the tagName and className above to build itself out and places the itemTemplate within
		this.$el.html(itemTemplate);
		
		return this;
	}

});