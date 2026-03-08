app.controller(
  "userDetailsController",
  function ($scope, $routeParams, detailService) {
    $scope.user = {};

    detailService.getUser($routeParams.id).then(function (response) {
      $scope.user = response.data[0];
    });
  },
);