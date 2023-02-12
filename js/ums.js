(function() {

	//setting up a ums (user management system) module
	var app = angular.module('ums', []);
	
	app.controller('newUMS', function() {
	
		this.data = umsdata;
	});
	
	var umsdata = [{
		image: [
			'../images/profile.gif'
		]
	}]



})();