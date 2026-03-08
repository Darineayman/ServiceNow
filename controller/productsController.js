app.controller(
  "productsController",
  function ($scope, myService, $routeParams) {
    $scope.users = [];
    $scope.newUser = {};
    $scope.editingUser = null;

    $scope.getUsers = function () {
      myService.getUsers().then(function (response) {
        $scope.users = response.data;
      });
    };
    $scope.getUsers();

    $scope.addUser = function () {
      if ($scope.newUser.name && $scope.newUser.email) {
        myService.addUser($scope.newUser).then(function () {
          $scope.newUser = {};
          $scope.getUsers();
        });
      }
    };

    $scope.deleteUser = function (id) {
      myService.deleteUser(id).then(function () {
        $scope.getUsers();
      });
    };

    $scope.editUser = function (user) {
      $scope.editingUser = angular.copy(user);
    };

    $scope.updateUser = function () {
      myService
        .updateUser($scope.editingUser.id, $scope.editingUser)
        .then(function () {
          $scope.editingUser = null;
          $scope.getUsers();
        });
    };
  },
);