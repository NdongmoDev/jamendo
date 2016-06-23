$(function() {
	var messageModel = Backbone.Model.extend({
		url: '/contact'
	});
	
	var messageView = Backbone.View.extend({
		events: {
			"click #send" : "collectAndSend",
		},
		
		collectAndSend: function () {
			var title = $("#title").val();
			var message = $("#message").val();			
			//this.model.set({title: title, message: message});
			this.model.save({title:title, message:message}, {
				success:function(model, response, options) {
					$("body").append(msgView.render().el);
					console.log('Successfully posted!');
				},
				error: function(model, xhr, options) {
					console.log('Something went wrong');
				}
			});
		},
		
		render: function() {
			var template = $("#sendView").html();
			var compiled = Handlebars.compile(template);
			var html = compiled(this.model.attributes);
			this.$el.html(html);
			return this;
		}
	});
	var msgModel = new messageModel();
	var msgView = new messageView({model: msgModel});
	$("body").append(msgView.render().el);
	
});