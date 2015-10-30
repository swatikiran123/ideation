'use strict';

angular.module('loginModule')
	.factory('loginService', function($http, $location, sessionService) {
		return{
			login:function(user, scope){
				console.log('login service invoked');
				scope.login_indicator="login invoked";

				var $promise=$http.post('/loginApi', user);
				//var $promise=$http.post('app/data/user.php', user);

				$promise.then(function(msg){
					console.log("Data received: " + msg.data);
					var uid = msg.data;
					if(uid) {
						console.log('login successful');
						scope.login_indicator="login successful";
						sessionService.set("user", uid);
						$location.path('/home');
					}
					else{
						console.log('login failed');
						scope.login_indicator="login failed";
						$location.path('/login');

					} 
				});
			},

			logout:function(){
				sessionService.destroy('user');
				$location.path('/login');

			},

			isLogged:function(){
				if (sessionService.get('user'))
					return true;
			}
		}
	});