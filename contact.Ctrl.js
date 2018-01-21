angular.module('myApp').controller('contactCtrl', ['$scope', "$interval", "$http", "$location", '$anchorScroll',
function($scope, $interval, $http, $location, $anchorScroll) {

  $scope.sendMail = function() {
    $http.post('/contact', $scope.message)
      .then(function(data, status, headers, config) {
          $scope.message = {};
      });
  }

}])
