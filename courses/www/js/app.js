angular.module('app', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    .state('courses', {
      url: '/courses',
      templateUrl: '/templates/courses.html'
    })
    
    .state('listofcourses', {
      url: '/listofcourses',
      templateUrl: '/templates/listofcourses.html'
    });

  // if none of the above states are matched, use this as the fallback
  
  $urlRouterProvider.otherwise('/listcourses');
}).controller('ListCourseCtrl', function($scope, $http) {
  $scope.fetchData = function() {
  <div ng-repeat="(key, value) in myObj"> ... </div>
  }
  
  
});