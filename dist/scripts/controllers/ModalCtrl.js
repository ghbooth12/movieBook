(function() {
  angular
    .module('root')
    .controller('ModalCtrl', ['$uibModalInstance', 'Poster', ModalCtrl]);

  function ModalCtrl($uibModalInstance, Poster) {
    this.movieInfo = {};

    this.save = function() {
      $uibModalInstance.close(this.movieInfo);
    };

    this.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

    this.searchPoster = Poster.search;
  }
})();
