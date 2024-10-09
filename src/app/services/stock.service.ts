import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private cache = new Map<string, any>();
  private mapping: { [key: string]: { revenueRow: number } } = {
    'AAPL': { revenueRow: 5 },
    'MSFT': { revenueRow: 9 }
  };

  constructor(private http: HttpClient) { }

  getStockData(ticker: string): Observable<any> {
    if (this.cache.has(ticker)) {
      return this.cache.get(ticker);
    }

    const url = `https://sheetdb.io/api/v1/h7ts77nvypgw8=${ticker}`;
    return this.http.get(url).pipe(
      tap(data => {
        console.log('data from server: ', data);
        this.cache.set(ticker, data);
      })
    );
  }

  extractRevenue(data: any, ticker: string): number {
    const rowIndex = this.mapping[ticker].revenueRow - 1;
    return data[rowIndex]?.revenue;
  }
}
