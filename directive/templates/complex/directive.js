/**
 * @ngdoc directive
 * @name <%= appname %>.directive:<%= _.camelize(name) %>
 *
 * @description
 * Description of <%= name %> directive, lorem ipsum dolar sit amet
 *
 */
angular.module('<%= appname %>').directive('<%= _.camelize(name) %>', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: '<%= htmlPath %>',
		link: function(scope, element, attrs, fn) {


		}
	};
});
