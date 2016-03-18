var sessioncheck = {};
var configreload = {};
angular.module('starter.controllers', ['starter.services'])
.controller('AppCtrl', function ($scope,$ionicModal, $timeout, RatsChatSvc, $ionicLoading, $location, $filter, $ionicLoading) {
	
	//--setting parameter
	$scope.users= {};
	$scope.ratslist= {};
	$scope.data= {};
	function internetaccess(toState) {
		if (navigator) {
			if (navigator.onLine != true) {
				onoffline = false;
				$location.url("/access/offline");
			} else {
				onoffline = true;
			}
		}
	}
	$scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		internetaccess(toState);
	});
	window.addEventListener("offline", function (e) {
		internetaccess();
	})
	window.addEventListener("online", function (e) {
		internetaccess();
	})
	//--token checker
	if(app_token() === null){
		$location.url("/access/login");
	}
	// popup
	$scope.showPopupMsg= function (title,msg) {
		var myPopup = $ionicPopup.show({
			template: '<p class="text-center">'+msg+'</p>',
			title: title,
			scope: $scope,

		});
		$timeout(function () {
			myPopup.close(); //close the popup after 3 seconds for some reason
		}, 2000);
	};
	

	
})
.controller('LoginCtrl', function ($scope, RatsChatSvc,$ionicPopup, $interval, $location,$window, $ionicLoading, $timeout) {
	//addanalytics("flexible login page");
	//--setting parameter
	$scope.logindata = {};
	$scope.signin = {};
	$scope.signup = {};
	$scope.logout = {};
	//--variable
	var loginstatus = false;
	//--flush storage
	$.jStorage.flush();
	
	//        ***** tabchange ****
	$scope.tab = 'signin';
	$scope.classa = 'active';
	$scope.classb = '';
	$scope.tabchange = function (tab, a) {
		$scope.tab = tab;
		if (a == 1) {
			$scope.classa = "active";
			$scope.classb = '';

		} else {
			$scope.classa = '';
			$scope.classb = "active";

		}
	};
	// loader
	$scope.showloading = function () {
		$ionicLoading.show({
			template: '<ion-spinner class="spinner-positive"></ion-spinner>'
		});
		$timeout(function () {
			$ionicLoading.hide();
		}, 5000);
	};

	// popup
	$scope.showPopupMsg= function (title,msg) {
		var myPopup = $ionicPopup.show({
			template: '<p class="text-center">'+msg+'</p>',
			title: title,
			scope: $scope,

		});
		$timeout(function () {
			myPopup.close(); //close the popup after 3 seconds for some reason
		}, 2000);
	};
	//--get country list for signup
	$scope.getCountry = function () {
		RatsChatSvc.getCountryList(function (data, status) {
			$scope.countries= data.response;
			$scope.signup.country = {country_code:"MY"};
		}, function (err) {
			$location.url("/access/offline");
		});
	}
	$scope.getCountry();
	$scope.selectCountry = function() {
		console.log($scope.signup.country.country_code);
	};
	//--gender setting
	$scope.genders = [
	  {"gender_cd":"M","gender_nm":"Male"},
	  {"gender_cd":"F","gender_nm":"Female"}
	];
	$scope.signup.gender = {gender_cd:"M"};
	$scope.selectGender = function() {
		console.log($scope.signup.gender.gender_cd);
	};

	//SIGN UP FORM
	var signupsuccess = function (data, status) {
		if (data.response === true) {
			$.jStorage.set("uid", data.uid);
			$.jStorage.set("token", data.token);
			var rand=Math.floor((Math.random() * 100) + 1);
			var uuid=base64_encode(data.uid+rand);
			$.jStorage.set("uuid", uuid);
			$scope.showPopupMsg('Welcome to RatsChat!','Thank you for joining us.');
			$location.url("/tab/dash");
			$scope.signup = {};
		} else {
			$scope.showPopupMsg('Opps!',data.error);
		}		
		$ionicLoading.hide();
	}
	$scope.signupsubmit = function (signup) {
		$ionicLoading.show();
		$scope.allvalidation = [{
			field: $scope.signup.username,
			validation: ""
        }, 
		{
			field: $scope.signup.email,
			validation: ""
        },
        {
			field: $scope.signup.pwd,
			validation: ""
        }];
		var check = formvalidation($scope.allvalidation);
		if (check) {
			RatsChatSvc.signup($scope.signup, signupsuccess, function (err) {
				$location.url("/access/offline");
			});
		} else {
			$scope.showPopupMsg("Opps!","Please check your input form.");
			$ionicLoading.hide();
		}

	}

	// SIGN IN
	var signinsuccess = function (data, status) {
		
		if (data.response === true) {
			$.jStorage.set("uid", data.uid);
			$.jStorage.set("token", data.token);
			var rand=Math.floor((Math.random() * 100) + 1);
			var uuid=base64_encode(data.uid+rand);
			$.jStorage.set("uuid", uuid);
			$scope.showPopupMsg('Welcome to RatsChat!','Thank you for joining us.');
			$location.url("/tab/dash");
			$scope.signin = {};
		} else {
			$scope.showPopupMsg("Opps!",data.error);
		}
		$ionicLoading.hide();
	}
	$scope.signinsubmit = function (signin) {
		$ionicLoading.show();
		$scope.allvalidation = [{
			field: $scope.signin.uname,
			validation: ""
        }, {
			field: $scope.signin.pwd,
			validation: ""
        }];
		var check = formvalidation($scope.allvalidation);
		if (check) {
				RatsChatSvc.signin($scope.signin, signinsuccess, function (err) {
				$location.url("/access/offline");
			});
		} else {
			$scope.showPopupMsg("Opps!","Please check your username and password.");
			$ionicLoading.hide();
		}

	}
	//forgot password
	$scope.forgotpass = function () {
		$location.url("/access/forgotpassword");
	}
	//    ****** End ******

})
.controller('ChatCtrl', function ($scope,$ionicModal, $timeout, RatsChatSvc, $ionicLoading, $stateParams, $http) {
	$scope.user= {};
	$scope.detaildata= {};
	$scope.ratdetail= {};
	$scope.showPopupMsg= function (title,msg) {
		var myPopup = $ionicPopup.show({
			template: '<p class="text-center">'+msg+'</p>',
			title: title,
			scope: $scope,

		});
		$timeout(function () {
			myPopup.close(); //close the popup after 3 seconds for some reason
		}, 2000);
	};
	
	var detaildata=function (data, status) {
		if (data.response === true) {
			if(data.ratdetail){
				$scope.ratdetail=data.ratdetail;
				$scope.nodata="";
			}else{
				$scope.nodata="Not found.";
				$scope.ratdetail={};
			}
			$scope.userdetail ={};
		} else {
			if (data.session === true) {
				$scope.showPopupMsg('Opps!',data.error);
			}else{
				$location.url("/access/login");
			}
		}		
		$ionicLoading.hide();
	}
	$scope.userdetail=function (user) {
		$scope.user.uid=$stateParams.chatId;
		RatsChatSvc.getUserDetail($scope.user,detaildata, function (err) {$location.url("/access/offline");});
		$scope.detaildata={};
	}
	$scope.userdetail();
	
})
.controller('FindFriendCtrl', function ($scope,$ionicModal, $timeout, RatsChatSvc, $ionicLoading,$location,$ionicScrollDelegate) {
	//--token checker
	if(app_token() === null){
		$location.url("/access/login");
	}
	//--setting parameter
	$scope.users= {};
	$scope.ratslist= {};
	$scope.data= {};
	$scope.nodata={};
	// popup
	$scope.showPopupMsg= function (title,msg) {
		var myPopup = $ionicPopup.show({
			template: '<p class="text-center">'+msg+'</p>',
			title: title,
			scope: $scope,

		});
		$timeout(function () {
			myPopup.close(); //close the popup after 3 seconds for some reason
		}, 2000);
	};
	var listok = function (data, status) {
		if (data.response === true) {
			if(data.ratslist){
				$scope.ratslist=data.ratslist;
				$scope.nodata="";
			}else{
				$scope.nodata="Not found.";
				$scope.ratslist={};
			}
			$scope.userlist ={};
		} else {
			if (data.session === true) {
				$scope.showPopupMsg('Opps!',data.error);
			}else{
				$location.url("/access/login");
			}
		}		
		$ionicLoading.hide();
	}
	$scope.userlistsch = function (users) {
		RatsChatSvc.getUserlist($scope.users,listok, function (err) {$location.url("/access/offline");});
		$scope.$broadcast('scroll.infiniteScrollComplete');
		$scope.$broadcast('scroll.refreshComplete');
		$scope.userlistall={};
	}
	$scope.userlistall = function (users) {
		$ionicLoading.show();
		//$scope.users.findusername =$scope.data.findusername;
		RatsChatSvc.getUserlist($scope.users,listok, function (err) {$location.url("/access/offline");});
		$scope.$broadcast('scroll.infiniteScrollComplete');
		$scope.$broadcast('scroll.refreshComplete');
	}
	$scope.userlistall();
	/*
	var timer=$interval(function(){
		
	},5000);
	*/
	
})
;

