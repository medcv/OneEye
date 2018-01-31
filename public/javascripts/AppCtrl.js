angular.module('oneEye').controller('AppCtrl', ['$scope', 'socket', function ($scope, socket) {

  // Socket listeners
    // ================
    $scope.users = [];
    socket.on('init', function (data) {
      $scope.name = data.name;
      $scope.users = data.users;
    });

    socket.on('send:message', function (data) {
      $scope.users.push(data.users);
    });

}])
