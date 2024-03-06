angular.module('myApp')
.controller('mycontroller',function($scope) {
  $scope.chartData = {
    type:'bar',
    labels: ["Italy", "France", "Spain", "USA", "Argentina"],
    datasets: [{
      label: "World Wine Production 2018",
      data: [ 55, 49, 44, 24, 15],
      backgroundColor: '#9BD0F5',
      borderColor: '#FF6384'
    
    }

  ]
  };
  $scope.publicChart={
    type:'line',
    labels: ["Italy", "France", "Spain", "USA", "Argentina"],
    datasets: [{
      label: "World Wine Production 2018",
      data: [ 55, 49, 44, 24, 15],
      backgroundColor: '#9BD0F5',
      borderColor: '#FF6384'
    
    }

  ]

  };
  $scope.polarChart={
    type:'polar',
    labels: ["Italy", "France", "Spain", "USA", "Argentina"],
    datasets: [{
      label: "World Wine Production 2018",
      data: [ 55, 49, 44, 24, 15],
      backgroundColor: '#9BD0F5',
      borderColor: '#FF6384'
    
    }

  ]
  };
  $scope.mixedChart={
    type:'bar',

    labels: ["Italy", "France", "Spain", "USA", "Argentina"],
    datasets: [{
      tyoe:'bar',
      label: "World Wine Production 2018",
      data: [ 55, 49, 44, 24, 15],
      backgroundColor: '#9BD0F5',
      borderColor: '#FF6384',
      order: 2
      
    
    },
    {
      type: 'line',
     label: "World Wine Production 2018",
      data: [20, 40, 30, 35, 30, 20],
      backgroundColor: '#9BD0F5',
      borderColor: '#FF6384',
      order: 1
   }

  ]
  }


  $scope.chartOptions = {
    // Configure chart options as needed
    responsive: false,
   scales: {
     y: {
       beginAtZero: true
     }
   }
  };
});