angular.module('myApp').directive('lineDirective', function() {
    return {
      restrict: 'E',
      scope: {
        data: '=',
        options: '='
      },
      link: function(scope, element) {
        var canvasElement = element.find('canvas')[0];
        if (canvasElement) {
          var ctx = canvasElement.getContext('2d');
          var chart = new Chart(ctx, {
            type: 'line',
            data: scope.data,
            options: scope.options
          });
        } else {
          console.error('Canvas element not found.');
        }
      }
    };
  });