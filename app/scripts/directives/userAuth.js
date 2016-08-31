(function() {
  angular
    .module('root')
    .directive('userAuth', ['PopUp', userAuth]);

  function userAuth(PopUp) {


    return {
      templateUrl: '/templates/directives/userAuth.html',
      replace: true,
      restrict: 'E',
      scope: {},
      link: function(scope, element, attrs) {
        scope.registerUser = PopUp.registerUser;

        scope.logIn = function(email, password) {

        };

      } // end link
    }; // end return
  } // end userAuth
})();
