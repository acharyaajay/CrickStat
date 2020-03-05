import { Component, OnInit } from '@angular/core';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  sampleData: any =
  [
      { Country: 'China', Population: 1347350000, Percent: 19.18 },
      { Country: 'India', Population: 1210193422, Percent: 17.22 },
      { Country: 'USA', Population: 313912000, Percent: 4.47 },
      { Country: 'Indonesia', Population: 237641326, Percent: 3.38 },
      { Country: 'Brazil', Population: 192376496, Percent: 2.74 }
  ];

  padding: any = { left: 20, top: 5, right: 20, bottom: 5 };

  titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

  xAxis: any =
  {
      dataField: 'Country',
      gridLines: { visible: true },
      flip: false
  };

  valueAxis: any =
  {
      flip: true,
      labels: {
              visible: true,
              formatFunction: (value: string) => {
                  return parseInt(value) / 1000000;
          }
      }
  };

  seriesGroups: any[] =
  [
      {
          type: 'column',
          orientation: 'horizontal',
          columnsGapPercent: 50,
          toolTipFormatSettings: { thousandsSeparator: ',' },
          series: [
              { dataField: 'Population', displayText: 'Population (millions)' }
          ]
      }
  ];
  constructor() { }

  ngOnInit() {
  }

}
