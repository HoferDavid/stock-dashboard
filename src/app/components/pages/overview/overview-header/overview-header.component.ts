import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardService } from '../../../../services/dashboard.service';
import { MatButtonModule } from '@angular/material/button';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-overview-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    CdkDropList,
    CdkDrag,
  ],
  templateUrl: './overview-header.component.html',
  styleUrl: './overview-header.component.scss',
})
export class OverviewHeaderComponent {
  store = inject(DashboardService);

  widgetsOpen = signal(false);

  widgetPutBack(event: CdkDragDrop<number, any>) {
    const { previousContainer } = event;

    this.store.removeWidget(previousContainer.data);
  }
}
