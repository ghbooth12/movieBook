(function() {
  angular
    .module('root', ['ui.router', 'firebase'])
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
      });
  }
})();
