(function() {
  angular
    .module('root')
    .directive('userAuth', [userAuth]);

  function userAuth() {


    return {
      templateUrl: '/templates/directives/userAuth.html',
      replace: true,
      restrict: 'E',
      scope: {},
      link: function(scope, element, attrs) {

      } // end link
    }; // end return
  } // end userAuth
})();
