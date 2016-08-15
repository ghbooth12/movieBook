(function() {
  angular
    .module('root')
    .factory('Validation', Validation);

  function Validation() {
    var validation = {};

    validation.validTitle = function(length) {
      if (length < 2) {
        return 'short';
      } else if (length > 100) {
        return 'long';
      } else {
        return 'valid';
      }
    };

    validation.validGenre = function(length) {
      if (length > 100) {
        return 'long';
      } else {
        return 'valid';
      }
    };

    validation.validReview = function(length) {
      if (length < 20) {
        return 'short';
      } else if (length > 100) {
        return 'long';
      } else {
        return 'valid';
      }
    };

    return validation;
  }
})();
