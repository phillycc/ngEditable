
angular.module('editTextApp', [])
  .controller('ctrl', ['$scope', function($scope) {
    $scope.originalText = 'I love cheese, especially edam fondue. Goat cream cheese cheese and biscuits danish fontina cream cheese emmental cheeseburger melted cheese. Goat cheese triangles dolcelatte smelly cheese croque monsieur cow cottage cheese cheese slices. Cheese and biscuits roquefort everyone loves st. agur blue cheese macaroni cheese roquefort st. agur blue cheese cheese triangles. Cheese triangles cheese and biscuits st. agur blue cheese cream cheese rubber cheese jarlsberg cow fromage. Cheesecake brie parmesan cheese and wine dolcelatte taleggio jarlsberg when the cheese comes out everybody\'s happy. Cheese on toast stinking bishop cheese on toast cheese slices manchego cheeseburger jarlsberg brie. Cheeseburger cheese slices say cheese cheese on toast.';
  }])
  .directive('makeEditable', function($sce){
    return {
        restrict: 'A',
        transclude: true,
  		  templateUrl: 'make-editable.html',
  		  scope: true,
        link: function(scope, elem, attrs){
            scope.edit = function() {
              console.log("edit");
            };
            scope.save = function() {
              console.log("save");
            };
        }
    }
  });
