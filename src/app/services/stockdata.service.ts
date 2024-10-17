import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class StockDataService {
  private apiKey = environment.apiKey;
  private spreadsheetId = '1m3h9Xce3SRMaq20li2Qg4HuSZowwxQSd9FkQmeuI7Dw';

  constructor(private http: HttpClient) {}

  // Methode, um nur den letzten Revenue und das letzte Quartal zu laden
  getStockOverviewData(sheetName: string, revenueRow: number, quarterRow: number): Observable<any> {
    const revenueRange = `${sheetName}!A${revenueRow}:Z${revenueRow}`;
    const quarterRange = `${sheetName}!A${quarterRow}:Z${quarterRow}`;
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values:batchGet?ranges=${revenueRange}&ranges=${quarterRange}&key=${this.apiKey}`;
    return this.http.get(url);
  }

  // Methode, um detaillierte Daten zu laden, wenn ein Widget angeklickt wird
  getStockData(sheetName: string): Observable<any> {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/${sheetName}!A:Z?key=${this.apiKey}`;
    return this.http.get(url);
  }
}
