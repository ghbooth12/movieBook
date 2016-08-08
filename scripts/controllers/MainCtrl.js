(function() {
  angular
    .module('root')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl() {
    this.msg = "hello";
  }
})();
