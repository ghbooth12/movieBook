(function() {
  angular
    .module('root')
    .controller('ModalCtrl', ['$uibModalInstance', ModalCtrl]);

  function ModalCtrl($uibModalInstance) {
    this.movieInfo = {};

    this.save = function() {
      $uibModalInstance.close(this.movieInfo);
    };

    this.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
  }
})();
