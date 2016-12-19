//Call the angular.module.
var jungleApp = angular.module('jungleApp', ['ngRoute']);

// All routes for the application
// Restricted with {restricted: true/false} to only allow logged in users.
jungleApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: 'views/intro.html',
      access: {restricted: false}
    })
    .when('/index', {
      templateUrl: 'views/index.html',
      access: {restricted: false}
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'loginController',
      access: {restricted: false}
    })
    .when('/logout', {
      controller: 'logoutController',
      access: {restricted: true}
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'registerController',
      access: {restricted: false}
    })
    .when('/afterlogin', {
      templateUrl: 'views/afterlogin.html',
      access: {restricted: true}
    })
    .when('/map', {
      templateUrl: 'views/map.html',
      access: {restricted: true}
    })
    .when('/flappy', {
      templateUrl: 'views/flappy.html',
      access: {restricted: false}
    })
	// Otherwise redirects visitors who reaches an invalid route or are not logged in.
    .otherwise({
      redirectTo: '/'
    });
});

//Logic to check if user is logged in or not.
jungleApp.run(function ($rootScope, $location, $route, AuthService) {
  $rootScope.$on('$routeChangeStart',
    function (event, next, current) {
      AuthService.getUserStatus()
      .then(function(){
        if (next.access.restricted && !AuthService.isLoggedIn()){
          $location.path('/');
          $route.reload();
        }
      });
  });
});
