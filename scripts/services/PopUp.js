(function() {
  angular
    .module('root')
    .factory('PopUp', ['$uibModal', 'Movie', PopUp]);

  function PopUp($uibModal, Movie) {
    var openModal = function() {
      $uibModal
        .open({
          templateUrl: 'templates/modal.html',
          controller: 'ModalCtrl as modal'
        })
        .result.then(function(result) {
          Movie.add(result);
        });
    };

    return {openModal: openModal};
  }
})();
