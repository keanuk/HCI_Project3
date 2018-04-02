(function () {
  'use strict';

  let at = 'EAACEdEose0cBABZCvjBqpreDZBOmkkKpiuZBwlFq8gTLoZAg7FdDhJSu46hwkqQOlApPZB31OqQmnkz2nXyVzINrDRbqpgbQ2pLegXo3tVbOAJG7zOMWPGeJPJUnpTlrIJz6kjVi4WOPx17smRDqZCgI45UUy8xX5Hp3l8hFY0CR7z0GfLsf421f4qXS37CY52UjZBvmd5u23bqXSKnOovQ';

  let alachuaHumaneEvents = [];

  // getAlachuaHumane();
  // getAARP();
  // getSustainableUF();
  // getShands();
  // getHarn();
  // getGatorSmiles();
  // getGatorPals();

  angular
    .module('core')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$state', 'Authentication'];

  function HomeController($scope, $state, Authentication) {
    var vm = this;
    console.log(Authentication);

    $scope.$on('$viewContentLoaded', function(){

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
         getAlachuaHumane($scope);
         getAARP();
         getSustainableUF();
         getShands();
         getHarn();
         getGatorSmiles();
         getGatorPals();
       }
       else {
         console.log('Not authenticated');
       }
     }
   });
  }


   function getAlachuaHumane($scope) {
     FB.api('/' + 'alachuahumane.org?fields=name,events' + '&access_token=' + at, function(response) {
       if(response && !response.error) {
         console.log(response.name);
         $scope.alachuaHumane = response.name;
         $scope.alachuaHumaneEvents = response.events.data[0];
       }
       else {
         console.log(response.error);
       }
     })
   }

   function getAARP() {
     FB.api('/' + 'AARP?fields=name,events' + '&access_token=' + at, function(response) {
       if(response && !response.error) {
         console.log(response);
       }
       else {
         console.log(response.error);
       }
     })
   }

   function getSustainableUF() {
     FB.api('/' + 'sustainableuf?fields=name,events' + '&access_token=' + at, function(response) {
       if(response && !response.error) {
         console.log(response);
       }
       else {
         console.log(response.error);
       }
     })
  }

  function getShands() {
    FB.api('/' + 'ShandsArtsinMedicine?fields=name,events' + '&access_token=' + at, function(response) {
      if(response && !response.error) {
        console.log(response);
      }
      else {
        console.log(response.error);
      }
    })
  }

  function getHarn() {
    FB.api('/' + 'HarnMuseumofArt?fields=name,events' + '&access_token=' + at, function(response) {
      if(response && !response.error) {
        console.log(response);
      }
      else {
        console.log(response.error);
      }
    })
  }

  function getGatorSmiles() {
    FB.api('/' + 'gatorsmiles?fields=name,events' + '&access_token=' + at, function(response) {
      if(response && !response.error) {
        console.log(response);
      }
      else {
        console.log(response.error);
      }
    })
  }

  function getGatorPals() {
    FB.api('/' + 'gatorpalsapp2017?fields=name,events' + '&access_token=' + at, function(response) {
      if(response && !response.error) {
        console.log(response);
      }
      else {
        console.log(response.error);
      }
    })
  }

}());
