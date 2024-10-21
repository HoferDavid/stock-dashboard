import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { OverviewHeaderComponent } from "./overview-header/overview-header.component";
import { BaseStatsComponent } from "./widgets/base-stats/base-stats.component";
import { StockDataService } from '../../../services/stockdata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    OverviewHeaderComponent,
    BaseStatsComponent, CommonModule
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent implements OnInit {
  stocks: any[] = [];
  stockDataService = inject(StockDataService);

  ngOnInit(): void {
    this.loadStocks();
  }

  loadStocks(): void {
    const stockTickers = ["AAPL", "TSLA"];

    stockTickers.forEach(ticker => {
      this.stockDataService.getStockOverviewData(ticker).subscribe((data: any) => {
        const stock = {
          name: data.name,
          ticker: data.ticker,
          logo: `/logos/${ticker.toLowerCase()}.svg`,
          lastRevenue: data.revenue,
          lastQuarter: data.quarter
        };

        this.stocks.push(stock);
      });
    });
  }
}
