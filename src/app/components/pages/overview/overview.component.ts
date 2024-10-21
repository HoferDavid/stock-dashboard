import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { OverviewHeaderComponent } from "./overview-header/overview-header.component";
import { BaseStatsComponent } from "./widgets/base-stats/base-stats.component";
import { CommonModule } from '@angular/common';
import { FirestoreService } from '../../../services/firestore.service';

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
  firestoreService = inject(FirestoreService);


  ngOnInit(): void {
    this.loadStocks();
  }

  loadStocks(): void {
    this.firestoreService.getStocks().subscribe((data) => {
      console.log("Data from Firestore: ", data);
      this.stocks = data;
    });
  }
}
