(function() {
  angular
    .module('root')
    .factory('UserAuth', ['User', '$cookies', '$window', UserAuth]);

  function UserAuth(User, $cookies, $window) {
    var userAuth = {};

    userAuth.logIn = function(email, password) {
      var member = User.checkForMember(email, password);
      if (member) { // user is a registered memeber
        $cookies.put('currentUser', member);

        document.getElementById('signInbtn').style.display = 'none';
        document.getElementById('signOutbtn').style.display = 'block';
      } else { // user is NOT a registered memeber
        document.getElementById('logInErr').style.display = 'block';
      }
    };

    userAuth.logOut = function() {
      if ($cookies.get('currentUser')) {
        $cookies.remove('currentUser');
        $window.location = "/"; // load the home page
        // $window.location.reload() is not used
        // because when user logs out at the user page, the user page will be reloaded.

        document.getElementById('signInbtn').style.display = 'block';
        document.getElementById('signOutbtn').style.display = 'none';
        this.email = '';
        this.password = '';
      }
    };

    return userAuth;
  }
})();
