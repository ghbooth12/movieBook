(function() {
  angular
    .module('root')
    .controller('ModalCtrl', ['$uibModalInstance', 'Poster', 'Validation', '$http', ModalCtrl]);

  function ModalCtrl($uibModalInstance, Poster, Validation, $http) {
    this.movieInfo = {};

    this.save = function() {
      this.movieInfo.title = document.getElementById('title').value;
      this.movieInfo.genre = document.getElementById('genre').value;
      $uibModalInstance.close(this.movieInfo);
    };

    this.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

    this.validation = Validation;

    this.searchPoster = function(movieInfo) {
      var url = Poster.createUrl(movieInfo);

      // remove previous result
      Poster.removeResults();

      // Get Movie Poster From TMDB API
      $http.jsonp(url).then(function(data, status) {
        Poster.displayResults(data.data.results);
      }, function(data, status) {
        console.log("ERROR", JSON.stringify(data), status);
      });
    };
  }
})();
