
window.chartColors = {
	red : 'rgb(255, 99, 132)',
	orange : 'rgb(255, 159, 64)',
	yellow : 'rgb(255, 192, 0)',
	green : 'rgb(75, 192, 192)',
	blue : 'rgb(51, 51, 255)',
	purple : 'rgb(153, 102, 255)',
	grey : 'rgb(201, 203, 207)',

};
	
$(function () {

  'use strict';

  /* ChartJS
   * -------
   * Here we will create a few charts using ChartJS
   */

  //-----------------------
  //- MONTHLY SALES CHART -
  //-----------------------

  // Get context with jQuery - using jQuery's .get() method.
  var salesChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
{
    label: "Profit",
    fillColor: "rgba(226, 170, 0,0.9)",
    strokeColor: "rgba(226, 170, 0,0.8)",
    pointColor: "#E2AA00",
    pointStrokeColor: "rgba(226, 170, 0,1)",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(226, 170, 0,1)",
    borderColor:  "rgba(226, 170, 0,0.9)",
	backgroundColor: "rgba(226, 170, 0,0.9)",
    data: [ -0.04	, 3.99, 	 7.57 ,	 7.23 ,	 9.54 ]
  },
  {
      label: "Cost",
      fillColor: "rgba(60,141,188,0.9)",
      strokeColor: "rgba(60,141,188,0.8)",
      pointColor: "#3b8bba",
      pointStrokeColor: "rgba(60,141,188,1)",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(60,141,188,1)",
      borderColor: "rgba(60,141,188,0.9)",
      backgroundColor: "rgba(60,141,188,0.9)",
      data: [ 65.38 ,	 66.26 	, 80.56 ,	 75.08 	, 69.48 ]
    },
      {
        label: "Revenue",
        backgroundColor: "rgb(210, 214, 222)",
        data: [ 70.25 	, 88.12 ,	 82.31 ,	 84.14 ,	 85.71 ]
      }
        
    ]
  };
  var salesChartCanvas = $("#salesChart").get(0).getContext("2d");
  var salesChart = new Chart(salesChartCanvas, {
		type : 'line',
		data : salesChartData,
		options : {
			responsive: true,
			title:{
				display:false,
				text:"Chart.js Line Chart - Stacked Area"
			},
			tooltips: {
				mode: 'index',
			},
			hover: {
				mode: 'index'
			}
		}

	});

  
  var areaChartData0 = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "2016",
          borderColor : window.chartColors.green,
          backgroundColor : window.chartColors.green,
          fill : true,
          data: [ 61.13,61.58,75.60, 62.54, 63.48 ]
        },
        {
          label: "2017",
          borderColor : window.chartColors.red,
          backgroundColor : window.chartColors.red,
          fill : true,
          data: [ 70.25,88.12,82.31, 84.14 ,85.71]
        }
      ]
    }; 
  var areaChartData = {
	      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
	      datasets: [
	        {
	          label: "2016",
	          borderColor : window.chartColors.green,
	          backgroundColor : window.chartColors.green,
	          fill : true,
	          data: [-1.29	, -1.93	, 0.54 ,-3.77,-5.02]
	        },
	        {
	          label: "2017",

	          borderColor : window.chartColors.red,
	          backgroundColor : window.chartColors.red,
	          
	          data: [-0.04,3.99,7.57,7.23,9.54]
	        }
	      ]
	    };
  var areaChartData1 = {
	      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
	      datasets: [
	        {
	          label: "2016",
	          borderColor : window.chartColors.green,
	          backgroundColor : window.chartColors.green,
	          fill : true,
	          data: [ 62.42,63.51,75.06 ,66.31,68.50 ]
	        },
	        {
	          label: "2017",
	          fill : true,  
	          borderColor : window.chartColors.red,
	          backgroundColor : window.chartColors.red,
	          data: [ 65.38,66.26,80.56,75.08,69.48]
	        }
	      ]
	    };

  var barChartCanvas = $("#barChart0").get(0).getContext("2d");
 var chart0 = new Chart(barChartCanvas, {
		type : 'bar',
		data : areaChartData0,
		options : {
			responsive : true,
		     maintainAspectRatio: false,
			 legend: {
                  position: 'right',
              },
			title : {
				display : true,
				text : '매출액-Revenue' 
			},
			tooltips : {
				mode : 'index',
				intersect : true
			}
		}

	});
 var barChartCanvas = $("#barChart").get(0).getContext("2d");
 var chart = new Chart(barChartCanvas, {
		type : 'bar',
		data : areaChartData,
		options : {
			responsive : true,
		     maintainAspectRatio: false,
			 legend: {
                  position: 'right',
              },
			title : {display : true,
				text : '이익-Profit' 
			},
			tooltips : {
				mode : 'index',
				intersect : true
			}
		}

	});
 var barChartCanvas1 = $("#barChart1").get(0).getContext("2d");
 var chart1 = new Chart(barChartCanvas1, {
		type : 'bar',
		data : areaChartData1,
		options : {
			responsive : true,
		     maintainAspectRatio: false,
			 legend: {
                  position: 'right',
              },
			title : {display : true,
				text : '매출원가-COGS' 
			},
			tooltips : {
				mode : 'index',
				intersect : true
			}
		}

	});
});
