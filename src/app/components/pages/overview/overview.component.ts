import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { OverviewHeaderComponent } from "./overview-header/overview-header.component";
import { BaseStatsComponent } from "./widgets/base-stats/base-stats.component";
import { StockDataService } from '../../../services/stockdata.service';
import stockMapping from '../../../assets/stock-mapping.json';
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
    for (const [stockName, stockDetails] of Object.entries(stockMapping)) {
      const sheetName = `$${stockDetails.ticker}`;
      this.stockDataService
        .getStockOverviewData(sheetName, stockDetails.revenueRow, stockDetails.quarterRow)
        .subscribe((data: any) => {
          const lastRevenue = data.valueRanges[0].values[0].slice(-1)[0]; // Umsatz aus dem ersten Range
          const lastQuarter = data.valueRanges[1].values[0].slice(-1)[0]; // Quartal aus dem zweiten Range
  
          const stock = {
            name: stockDetails.name,
            ticker: stockDetails.ticker,
            logo: `/logos/${stockName.toLowerCase()}.svg`,
            lastRevenue: lastRevenue,
            lastQuarter: lastQuarter
          };
  
          this.stocks.push(stock);
        });
    }
  }
}