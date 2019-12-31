import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { chart } from 'highcharts';
import { Router } from '@angular/router';
import { RequirementService } from '../requirement.service';
import { InterviewService } from '../interview.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public options:Highcharts.Options;
  //  months: any = [10,29,8,7,9,78,90];


  constructor(private router: Router, private requirementService: InterviewService) {
    this.requirementDetails();
  }

  highcharts = Highcharts;
  openingdate: any = [];
  requirementDetails() {
    this.requirementService.getAllMothlyRequir().subscribe(data => {
      console.log(data);
      this.add = data;
      console.log(this.add);
      this.openingdate = this.add;
      console.log(this.openingdate);
      const chart = Highcharts.chart('container', {
        title:
          { text: 'Monthly Requirement' },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
          type: 'column',
          colorByPoint: true,
          data: this.openingdate.add,
        //  data: [
        //     this.openingdate.add
        //  ],
          showInLegend: false
        }],
        credits: { enabled: false },
      }, err => {
        console.log(err);
      })
     // console.log('char detgails', chart);
    })

  //   //yuguujgtutg
  //   var add = function(Array) {
  //     if ( typeof(Array) == "object") {
  //         for (var i = 0; i < Array.length; i++) {
  //             add(Array[i]);
  //         }
  //     }
  //     else document.write(Array);
  // }
  // console.log(add(Array));
  }
  add(add: any) {
    throw new Error("Method not implemented.");
  }

  chartOptions1 =
    {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: { text: 'Requirement'},
      tooltip: { pointFormat: '{series.name}: <b>{point.no}</b>' },
      plotOptions: {
        pie:
        {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.y}%',
          }
        }
      },
      series: [{
        name: 'Skill',
        colorByPoint: true,
        data: [
          {
            name: 'java',
            y: 30,
            sliced: true,
            selected: true,
          },
          {
            name: 'mean stack',
            y: 20,
          },
          {
            name: 'data science',
            y: 10,
          },
          {
            name: 'phython',
            y: 20,
          },
          {
            name: 'dot net',
            y: 20,
          }],
      }]
    };
  fresherExperience =
    {
      chart:
      {
        type: 'area'
      },
      accessibility: {
        description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
      },
      title: {
        text: 'Fresher Experience statistics'
      },
      xAxis: {
        allowDecimals: false,
        labels: {
          formatter() {
            return this.value; // clean, unformatted number for year     
          }
        },
        accessibility:
          { rangeDescription: 'Range: 2015 to 2020.' }
      },

      yAxis: {
        title: {
          text: 'Range'
        },
        labels: {
          formatter() {
            return this.value / 100;
          }
        }
      },
      tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
      },
      plotOptions: {
        area: {
          pointStart: 1980,
          marker: {
            enabled: false,
            symbol: 'circle',
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          }
        }
      },
      series: [{
        name: 'Fresher',
        data: [null, null, null, null, null, 6, 11, 32, 110, 235,
          369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
          20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
          26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
          24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
          21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
          10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
          5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018],
        events() {
          this.router.navigate(['./highchart']);
        }
      },
      {
        name: 'Experience',
        data: [null, null, null, null, null, null, null, null, null, null,
          5, 25, 50, 120, 150, 200, 426, 660, 869, 1060,
          1605, 2471, 3322, 4238, 5221, 6129, 7089, 8339, 9399, 10538,
          11643, 13092, 14478, 15915, 17385, 19055, 21205, 23044, 25393, 27935,
          30062, 32049, 33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000,
          37000, 35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
          21000, 20000, 19000, 18000, 18000, 17000, 16000, 15537, 14162, 12787,
          12600, 11400, 5500, 4512, 4502, 4502, 4500, 4500],
      }]
    };
  candidateStatus = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Status Of Candidate'
    },
    accessibility: { announceNewData: { enabled: true } },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: { text: ' Range' }
    },
    legend: { enabled: false },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y}'
        }
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> of total<br/>'
    },
    series: [{
      name: 'status',
      colorByPoint: true,
      data:
        [{
          name: 'In-Progress',
          y: 32,
          drilldown: 'Chrome',
        },
        { name: 'On-Hold', y: 20, drilldown: 'Firefox', },
        { name: 'Selected', y: 57, drilldown: 'Internet Explorer', },
        { name: 'Rejected', y: 15, drilldown: 'Safari', }]
    }],
    drilldown:
    {
      series:
        [{
          name: 'In-Progress',
          id: 'Chrome',
          data:
            [['v65.0', 0.1],

            ['v64.0', 1.3],
            ['v63.0', 53.02],
            ['v62.0', 1.4],
            ['v61.0', 0.88],
            ['v60.0', 0.56],
            ['v59.0', 0.45],
            ['v58.0', 0.49]]
        },
        {
          name: 'On-Hold',
          id: 'Firefox',
          data:
            [['v58.0', 1.02],
            ['v57.0', 7.36],
            ['v56.0', 0.35],
            ['v55.0', 0.11],
            ['v54.0', 0.1],
            ['v52.0', 0.95],
            ['v51.0', 0.15],
            ['v50.0', 0.1],
            ['v48.0', 0.31],
            ['v47.0', 0.12]]
        },
        {
          name: 'Selected',
          id: 'Internet Explorer',
          data:
            [['v11.0', 6.2],
            ['v10.0', 0.29],
            ['v9.0', 0.27],
            ['v8.0', 0.47],
            ['v54.0', 0.1],
            ['v52.0', 0.95],
            ['v51.0', 0.15],
            ['v50.0', 0.1],
            ['v48.0', 0.31],
            ['v47.0', 0.12]]
        },
        {
          name: 'Rejected',
          id: 'Safari',
          data:
            [['v11.0', 3.39],
            ['v10.1', 0.96],
            ['v10.0', 0.36],
            ['v9.1', 0.54],
            ['v9.0', 0.13],
            ['v5.1', 0.2]]
        },
        {
          name: 'Edge',
          id: 'Edge',
          data:
            [['v16', 2.6],
            ['v15', 0.92],
            ['v14', 0.4],
            ['v13', 0.1]]
        }]
    }
  }; dashboard() { console.log('Clicked On DashBoard'); }

  ngOnInit() {
  }

}
