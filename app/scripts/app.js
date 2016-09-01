(function() {
  angular
    .module('root', ['ui.router', 'firebase', 'ui.bootstrap', 'ngCookies'])
    .config(config);

  function config($locationProvider, $stateProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('main', {
        url: '/',
        controller: 'MainCtrl as main',
        templateUrl: '/templates/main.html'
      })
      .state('userPage', {
        url: '/userPage',
        controller: 'UserPageCtrl as userPage',
        templateUrl: '/templates/userPage.html'
      });
  }
})();
