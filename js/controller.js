
var artistController = angular.module('artistController', []);

artistController.controller('ListController', function($scope, $http) {
    $http.get("js/data.json").then(function (response) {
        $scope.artists = response.data;
        $scope.artistOrder='name';
    });
});
artistController.controller('DetailsController', function($scope, $http, $routeParams) {
    $http.get("js/data.json").then(function (response) {
        $scope.artists = response.data;
        $scope.whichItem=$routeParams.itemId;

        if($routeParams.itemId>0){
          $scope.prevItem=Number($routeParams.itemId)-1;

        }else {
            $scope.prevItem=$scope.artists.length-1;
        }
        if($routeParams.itemId < $scope.artists.length-1){
          $scope.nextItem=Number($routeParams.itemId)+1;

        }else {
            $scope.nextItem=0;
        }
    });
});
