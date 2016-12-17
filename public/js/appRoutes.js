angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
// var appRoutes = angular.module('appRoutes', []);

// appRoutes.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)) {
	$routeProvider
		// home page
		.when('/', {
			templateUrl: 'views/index.html',
			controller: 'MainController'
		})
		// After login
		.when('/afterlogin', {
			templateUrl: 'views/afterlogin.html',
			controller: 'MainController',
		})
		// map and games
		.when('/map', {
			templateUrl: 'views/map.html',
			controller: 'MainController',
		})
		// Login
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'MainController'
		})
		// Register
		.when('/register', {
			templateUrl: 'views/register.html',
			controller: 'MainController'
		})
		.otherwise({
			redirectTo: '/'
		});
	$locationProvider.html5Mode(true);

}]);
