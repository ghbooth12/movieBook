(function() {
  angular
    .module('root')
    .factory('PopUp', ['$uibModal', 'Movie', 'User', PopUp]);

  function PopUp($uibModal, Movie, User) {
    var popUp = {};

    popUp.openModal = function() {
      $uibModal
        .open({
          templateUrl: 'templates/modalAddMovie.html',
          controller: 'ModalCtrl as modal'
        })
        .result.then(function(result) {
          Movie.add(result);
        });
    };

    popUp.registerUser = function() {
      $uibModal
        .open({
          templateUrl: 'templates/registerUser.html',
          controller: 'RegisterUserCtrl as register'
        })
        .result.then(function(userInfo) {
          User.register(userInfo);
        });
    };

    return popUp;
  }
})();
