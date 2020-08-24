(function() {
  'use strict';
  angular
    .module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
      $scope.meal = $scope.meal;
      $scope.numberOfMeal;
      $scope.message = "";
      $scope.messageType = "";

      $scope.checkIfTooMuch = function() {
        if(!$scope.meal) {
          $scope.message = "Please enter data first";
          $scope.messageType = 'alert-success'
        } else if (checkMealLength($scope.meal) < 4) {
          $scope.message = "Enjoy!";
          $scope.messageType = 'alert-success'
        } else {
          $scope.message = "Too much!";
          $scope.messageType = 'alert-danger'
        }
      };

      function checkDishesLength(dishes) {
        var mealArr = meal.split(",");
        angular.forEach(mealArr, function(value, key) {
          console.log("value: " + value);
          if(!value || value == " ") {
            console.log("Remove the value: " + value);
            mealArr.splice(key, 1);
          }
        });
        return mealArr.length;
      }
    }
})();