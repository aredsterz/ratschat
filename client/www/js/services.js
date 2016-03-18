//global var setting
var server_host = "http://csl-inspiron-pc/ratschat/server/index.php";
var url_proc = server_host + "?json&url=";

angular.module('starter.services', [])
.factory('RatsChatSvc', function ($http, $filter) {

	return {

		all: function () {
			return chats;
		},
		remove: function (chat) {
			chats.splice(chats.indexOf(chat), 1);
		},
		get: function (chatId) {
			for (var i = 0; i < chats.length; i++) {
				if (chats[i].id === parseInt(chatId)) {
					return chats[i];
				}
			}
			return null;
		},
		//--signup
		signup: function (signup, callback, err) {
			return $http.post(url_proc + 'signup', {
				u_name:signup.username,
				u_email:signup.email,
				u_pwd:signup.pwd,
				u_gnd:signup.gender.gender_cd,
				u_cn:signup.country.country_code
			}, 
			{
				headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
			}).success(callback).error(err);
		},
		//--signin
		signin: function (signin, callback, err) {
			return $http.post(url_proc + 'auth', {
				u_uname:signin.uname,
				u_pwd:signin.pwd
			}, 
			{
				headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
			}).success(callback).error(err);
		},
		//--logout
		killtoken: function (logout, callback, err) {
			$.jStorage.flush();
			return $http.post(url_proc + 'logout', {
				uid:logout.uid
			}, 
			{
				headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
			}).success(callback).error(err);
		},
		//Country List
		getCountryList: function (callback, err) {
			return $http({
				url: url_proc + 'cn',
				method: "POST",
				headers: {
				   'Content-Type': 'text/html'
				}
			}).success(callback).error(err);
		},
		//user List
		getUserlist: function (users,callback, err) {
			return $http.post(url_proc + 'userslist&list', {
				uid:uid(),
				token:app_token(),
				finduser:users.findusername
			}, 
			{
				headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
			}).success(callback).error(err);
		},
		
		//user detail
		getUserDetail: function (user,callback,err){
			return $http.post(url_proc + 'userslist&detail', {
				uid:user.uid,
				token:app_token()
			}, 
			{
				headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
			}).success(callback).error(err);
		},
		
		//--forgotpassword
		forgotpassword: function (email, callback, err) {
			return $http({
				url: url_proc + 'forgot',
				method: "POST",
				data: {
					'email': enquiry.email
				}
			}).success(callback).error(err);
		},
		//changepassword
		changepassword: function (password, callback, err) {
			return $http({
				url: url_proc + 'changePassword',
				method: "POST",
				data: password
			}).success(callback).error(err);
		},
		
		//--getuser
		getuser: function () {
			return $.jStorage.get("user");
		},
		//--
		getappconfig: function (callback, err) {
			return $http.get(url_proc + 'getAppConfig', {
				withCredentials: false
			}).success(callback).error(err);
		},
		createChat: function (callback, err) {
			
		},
		getAllMessage: function (callback, err) {
			
		},
		sendMessage: function (callback, err) {
			
			return $http({
				url: url_proc+'sentchat',
				method: "POST",
				withCredentials: false,
				headers: {
				   'Content-Type': 'text/html'
				 },
				data: {
					'username': signin.username,
					'password': signin.password
				}
			}).success(callback).error(err);
			
		},
		getAllUser: function (callback, err) {
			
			return $http({
				url: url_proc+'getcontact',
				method: "POST",
				withCredentials: false,
				headers: {
				   'Content-Type': 'text/html'
				 },
				data: {
					'username': signin.username,
					'password': signin.password
				}
			}).success(callback).error(err);
		},
		//--editprofile
		editprofile: function (callback, err) {
			return $http({
				url: url_proc + 'editProfile',
				method: "POST",
				data: user
			}).success(callback).error(err);
		},
		getNotification: function (pageno, callback, err) {
			if ($.jStorage.get("user")) {
				var notificationres = function (data) {
					return $http.get(url_proc + 'getAllNotification?event=' + data.eventnotification + '&blog=' + data.blognotification + '&video=' + data.videonotification + '&photo=' + data.photonotification + '&pageno=' + pageno, {
						withCredentials: false
					}).success(callback).error(err);
				}

				$http.get(url_proc + 'getSingleUserDetail?id=' + $.jStorage.get("user").id, {
					withCredentials: false
				}).success(notificationres);

			} else {
				console.log("else user");
				return $http.get(url_proc + 'getAllNotification?event=true&blog=true&video=true&photo=true&pageno='+pageno, {
					withCredentials: false
				}).success(callback).error(err);
			}

		},
		getallfrontmenu: function (callback, err) {
			$http.get(url_proc + 'getAllFrontmenu', {
				withCredentials: false
			}).success(callback).error(err);
		},
		getarticle: function (id, callback, err) {
			$http.get(url_proc + 'getSingleArticles?id=' + id, {
				withCredentials: false
			}).success(callback).error(err);
		},
		getsingleuserdetail: function (callback, err) {
			$http.get(url_proc + 'getSingleUserDetail?id=' + $.jStorage.get("user").id, {
				withCredentials: false
			}).success(callback).error(err);
		},
		gethomecontent: function (callback, err) {
			$http.get(url_proc + 'getSingleArticles?id=1', {
				withCredentials: false
			}).success(callback).error(err);
		},
		setconfigdata: function (data) {
			$.jStorage.set("configdata", data);
		},
		getconfigdata: function (data) {
			return $.jStorage.get("configdata");
		},
		setNotificationToken: function (callback) {
			$http.get(url_proc + 'setNotificationToken?os=' + $.jStorage.get("os")+"&token="+$.jStorage.get("token"), {
				withCredentials: false
			}).success(callback);
		}
	};
});

