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
		restrict: 'A',
		link: function(scope, element, attrs, fn) {


		}
	};
});