(function() {
  angular
    .module('root')
    .controller('ModalCtrl', ['$uibModalInstance', 'Poster', 'Validation', ModalCtrl]);

  function ModalCtrl($uibModalInstance, Poster, Validation) {
    this.movieInfo = {};

    this.save = function() {
      $uibModalInstance.close(this.movieInfo);
    };

    this.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

    this.searchPoster = Poster.search;

    this.validation = Validation;
  }
})();
