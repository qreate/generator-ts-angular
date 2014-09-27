/**
 * @ngdoc interface
 * @name <%= name %>
 *
 * @description
 * Description of <%= name %> module, lorem ipsum dolar sit amet
 */
angular.module('<%= _.camelize(name) %>', ['ui.bootstrap','ui.utils','<%= routerModuleName %>','ngAnimate']);
<% if (!uirouter) { %>
angular.module('<%= _.camelize(name) %>').config(function($routeProvider) {

    /* Add New Routes Above */

});
<% } %><% if (uirouter) { %>
angular.module('<%= _.camelize(name) %>').config(function($stateProvider) {

    /* Add New States Above */

});
<% } %>
