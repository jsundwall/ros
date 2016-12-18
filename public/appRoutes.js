var jungleApp = angular.module('jungleApp', ['ngRoute']);

jungleApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
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
    .otherwise({
      redirectTo: '/'
    });
});

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
