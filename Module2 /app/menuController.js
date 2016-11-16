app.controller('menuController', [
    '$scope',
    function($scope){ 
        $scope.model = {title: 'Our Menu'};

    $scope.changeMainDish = function (item, price) {
    $scope.model.mainDish = item;
    $scope.model.price = "$12.99";
    
}

    }
]);