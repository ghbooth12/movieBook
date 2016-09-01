(function() {
  angular
    .module('root')
    .run(['$cookies', UserCookies]);

  function UserCookies($cookies) {
    var currentUser = $cookies.get('currentUser');

    if (!currentUser || currentUser === '') {
      document.getElementById('signInbtn').style.display = 'block';
      document.getElementById('signOutbtn').style.display = 'none';
    } else {
      document.getElementById('signInbtn').style.display = 'none';
      document.getElementById('signOutbtn').style.display = 'block';
    }
  }
})();
