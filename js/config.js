(function(angular) {
	'use strict';

	angular.module('x-registries')
	.config(['xpsui:configProvider', function(config) {
		config.set('after_login_url', '/personal-page');
	}]);
}(window.angular));
