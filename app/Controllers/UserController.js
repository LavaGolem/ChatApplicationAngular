app.controller("UserController", ['$scope',  '$uibModalInstance','user','img',
    function($scope, $uibModalInstance, user,img) {
        $scope.user = user;
        $scope.img = img;

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);