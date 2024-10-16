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
      this.stockDataService
        .getStockData(stockDetails.sheetName)
        .subscribe((data) => {
          const stock = {
            name: stockName,
            logo: `/logos/${stockName.toLowerCase()}.svg`,
            data: {
              revenue: this.extractData(data, stockDetails.revenueRow),
              netIncome: this.extractData(data, stockDetails.netIncomeRow),
              grossMargin: this.extractData(data, stockDetails.grossMarginRow),
            },
          };
          this.stocks.push(stock);
        });
    }
  }

  extractData(sheetData: any, row: number): number[] {
    return sheetData.values[row - 1]
      .slice(-12)
      .map((value: any) => parseFloat(value));
  }
}