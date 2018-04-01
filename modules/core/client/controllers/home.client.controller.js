(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$state', 'Authentication'];

  function HomeController($scope, $state, Authentication) {
    var vm = this;
    console.log(Authentication);
  }
}());

// Facebook API calls have been disabled temporarily
//
// window.fbAsyncInit = function() {
//   FB.init({
//     appId      : '291380158062880',
//     cookie     : true,
//     xfbml      : true,
//     version    : 'v2.12'
//   });
//
//   // FB.AppEvents.logPageView();
//
//   FB.getLoginStatus(function(response) {
//       statusChangeCallback(response);
//   });
//
// };
//
// (function(d, s, id){
//    var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) {return;}
//    js = d.createElement(s); js.id = id;
//    js.src = "https://connect.facebook.net/en_US/sdk.js";
//    fjs.parentNode.insertBefore(js, fjs);
//  }(document, 'script', 'facebook-jssdk'));
//
//  function statusChangeCallback(response) {
//    if(response.status === 'connected') {
//      console.log('Logged in and authenticated');
//      console.log(response.authResponse.accessToken);
//      fbCall();
//    }
//    else {
//      console.log('Not authenticated');
//    }
//  }
//
//  function fbCall() {
//    FB.api('/cocacola?fields=name,email,events', function(response) {
//      if(response && !response.error) {
//        console.log(response);
//      }
//      else {
//        console.log(response.error);
//      }
//    })
//  }
