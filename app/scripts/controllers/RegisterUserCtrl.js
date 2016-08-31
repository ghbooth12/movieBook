(function() {
  angular
    .module('root')
    .controller('RegisterUserCtrl', ['$uibModalInstance', 'Validation', RegisterUserCtrl]);

  function RegisterUserCtrl($uibModalInstance, Validation) {
    this.userInfo = {};

    this.save = function() {
      $uibModalInstance.close(this.userInfo);
    };

    this.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

    this.validation = Validation;
  }
})();
