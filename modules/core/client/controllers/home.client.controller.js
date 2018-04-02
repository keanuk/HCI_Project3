(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$state', 'Authentication'];

  function HomeController($scope, $state, Authentication) {
    var vm = this;
    console.log(Authentication);

    let at = 'EAACEdEose0cBAJXxwvegb05GxJrmzCC1TfBK3bxKi4R5vZA6EQZBgeuOZCTbolSv3dKVIhOmgvd9SaPvo2cHbJAuXTvyHcLfebn3v1ZA9wwYIGEcQEhGqLaNaCucem1p2iXl1ZA0hjpvvZAbseZC65vwxdXcYPVTfBFJZCMSP6M4l287fQHLg3Pqia3RskZADaYmxZAvDKcZAipgLq7hv41mFvW';

    let orgs = ['alachuahumane.org', 'AARP', 'sustainableuf', 'ShandsArtsinMedicine', 'HarnMuseumofArt', 'gatorsmiles', 'gatorpalsapp2017'];

    vm.orgs = orgs;

    window.fbAsyncInit = function() {
      FB.init({
        appId      : '291380158062880',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.12'
      });

      // FB.AppEvents.logPageView();

      FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
      });

    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

     function statusChangeCallback(response) {
       if(response.status === 'connected') {
         console.log('Logged in and authenticated');
         console.log(response);
         // at = response.authResponse.accessToken;

         console.log(vm);

         for(var org in orgs) {
           populateDB($scope, orgs[org], at, vm);
         }

       }
       else {
         console.log('Not authenticated');
       }
     }
  }

  function populateDB($scope, org, at, vm) {
    FB.api('/' + org + '?fields=name,events' + '&access_token=' + at, function(response) {
      if(response && !response.error) {
        console.log(response);
        vm.test = response.name;
      }
      else {
        console.log(response.error);
      }
    })
  }
}());
