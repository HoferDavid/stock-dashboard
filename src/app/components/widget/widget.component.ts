import { Component, input, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
})
export class WidgetComponent implements OnInit {
  chart: any;

  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.loadStockData('AAPL'); // Change
  }

  loadStockData(ticker: string) {
    this.stockService.getStockData(ticker).subscribe((data) => {
      const revenue = this.stockService.extractRevenue(data, ticker);
      this.createChart(revenue);
    });
  }

  createChart(revenue: number) {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'], // Example quarters
        datasets: [
          {
            label: 'Umsatz',
            data: [revenue], // Add more data sets
            borderColor: '#3cba9f',
            fill: false,
          },
        ],
      },
    });
  }
}
