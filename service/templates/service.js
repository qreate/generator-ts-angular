/**
 * @ngdoc service
 * @name <%= appname %>.service:<%= _.camelize(name) %>
 * @requires   // 'provide any dependencies ex. $scope, you can have multiple @requires lines'
 *
 * @description
 * Description of <%= name %> service, lorem ipsum dolar sit amet
 **/
angular.module('<%= appname %>').factory('<%= _.camelize(name) %>',function() {

	var <%= _.camelize(name) %> = {};

	return <%= _.camelize(name) %>;
});