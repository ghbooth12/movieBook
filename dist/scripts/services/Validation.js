(function() {
  angular
    .module('root')
    .factory('Validation', Validation);

  function Validation() {
    var validation = {};

    validation.validTitle = function(string) {
      if (string) {
        var length = string.length;
        if (length < 2) {
          return 'short';
        } else if (length > 100) {
          return 'long';
        } else if (length >= 2 && length <= 100) {
          return 'valid';
        }
      }
    };

    validation.validGenre = function(string) {
      if (string) {
        var length = string.length;
        if (length > 100) {
          return 'long';
        } else {
          return 'valid';
        }
      }
    };

    validation.validReview = function(string) {
      if (string) {
        var length = string.length;
        if (length < 20) {
          return 'short';
        } else if (length > 100) {
          return 'long';
        } else if (length >= 20 && length <= 100) {
          return 'valid';
        }
      }
    };

    validation.matchPassword = function(str1, str2) {
      if (str1 && str2) {
        if (str1 === str2) {
          return 'valid';
        } else {
          return 'not match';
        }
      }
    }

    validation.validPassword = function(string) {
      if (string) {
        var length = string.length;
        if (length < 4) {
          return 'short';
        } else {
          return 'valid';
        }
      }
    }

    return validation;
  }
})();
