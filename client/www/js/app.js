// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      //StatusBar.styleDefault();
		StatusBar.overlaysWebView(true);
		StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $httpProvider) {
 
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
	// setup an abstract state for the tabs directive
	.state('tab', {
		url: '/tab',
		abstract: true,
		templateUrl: 'templates/tabs.html',
		controller: 'AppCtrl'
	})
	//--login
	.state('access', {
		url: '/access',
		abstract: true,
		templateUrl: 'templates/access.html'
	})
	//--find
	.state('find', {
		url: '/find',
		abstract: true,
		templateUrl: 'templates/find.html'
	})
	
	//--login template and controller
	.state('access.login', {
		url: '/login',
		views: {
			'content': {
				templateUrl: 'templates/login.html',
				controller: "LoginCtrl"
			}
		}
	})
	.state('access.signup', {
		url: '/signup',
		views: {
			'content': {
				templateUrl: 'templates/signup.html',
				controller: "LoginCtrl"
			}
		}
	})
	.state('access.offline', {
		url: '/offline',
		views: {
			'content': {
				templateUrl: 'templates/offline.html',
				controller: "OfflineCtrl"
			}
		}
	})
  // Each tab has its own nav history stack:
	.state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatCtrl'
        }
      }
    })
	.state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller:'ChatCtrl'
        }
      }
    })
	.state('find.findfriend', {
      url: '/findfriend',
      views: {
        'find': {
          templateUrl: 'templates/find-friend.html',
          controller: 'FindFriendCtrl'
        }
      }
    })
	
	.state('tab.dash', {
		url: '/dash',
		views: {
		  'tab-dash': {
			templateUrl: 'templates/tab-dash.html',
			controller: 'AppCtrl'
		  }
		}
	 })
    

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AppCtrl'
      }
    }
  })
 .state('tab.clubs', {
    url: '/clubs',
    views: {
      'tab-clubs': {
        templateUrl: 'templates/tab-clubs.html',
        controller: 'AppCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/chats');

});
var formvalidation = function (allvalidation) {
	var isvalid2 = true;
	for (var i = 0; i < allvalidation.length; i++) {
		if (allvalidation[i].field == "" || !allvalidation[i].field) {
			allvalidation[i].validation = "ng-dirty";
			isvalid2 = false;
		} else {
			allvalidation[i].validation = "";
		}
	}
	return isvalid2;
}
var base64_encode =function (data) {
  var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
    ac = 0,
    enc = '',
    tmp_arr = [];

  if (!data) {
    return data;
  }

  do { // pack three octets into four hexets
    o1 = data.charCodeAt(i++);
    o2 = data.charCodeAt(i++);
    o3 = data.charCodeAt(i++);

    bits = o1 << 16 | o2 << 8 | o3;

    h1 = bits >> 18 & 0x3f;
    h2 = bits >> 12 & 0x3f;
    h3 = bits >> 6 & 0x3f;
    h4 = bits & 0x3f;

    // use hexets to index into b64, and append result to encoded string
    tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
  } while (i < data.length);

  enc = tmp_arr.join('');

  var r = data.length % 3;

  return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
}
var app_token =function(){
	var token =$.jStorage.get("token");
	return token;
}
var uid =function(){
	var uid =$.jStorage.get("uid");
	if(uid !== null){
		return uid;
	}else{
		return false;
	}
}
