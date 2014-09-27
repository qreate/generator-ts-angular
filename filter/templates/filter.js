/**
 * @ngdoc filter
 * @name <%= appname %>.filter:<%= _.camelize(name) %>
 * @function // 'all filters are a function'
 *
 */
angular.module('<%= appname %>').filter('<%= _.camelize(name) %>', function() {
	return function(input,arg) {
		return 'output';
	};
});