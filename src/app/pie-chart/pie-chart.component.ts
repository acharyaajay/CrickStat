import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import {Piechartdata} from './../piechartdata.model'


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  data: Piechartdata[]=[
      { Amount: 11, Category: 'Dr Nice' },
      { Amount: 12, Category: 'Narco' },
  ];
  Category = ['One','Two','Three','Four','Five','Six','Seven','Eight'];  
  Amount = [10,10,10,10,10,10,10,10];  
  chart = [];  
  constructor() { }

  ngOnInit() {
      
      this.chart = new Chart('canvas', {  
        type: 'pie',  
        data: {  
          labels: this.Category,  
          datasets: [  
            {  
              data: this.Amount,  
              borderColor: '#3cba9f',  
              backgroundColor: [  
                "#3cb371",  
                "#0000FF",  
                "#9966FF",  
                "#4C4CFF",  
                "#00FFFF",  
                "#f990a7",  
                "#aad2ed",  
                "#FF00FF",  
                "Blue",  
                "Red",  
                "Blue"  
              ],  
              fill: true  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false  
          },  
          scales: {  
            xAxes: [{  
              display: false  
            }],  
            yAxes: [{  
              display: false  
            }],  
          }  
        }  
      });  
    }

}
