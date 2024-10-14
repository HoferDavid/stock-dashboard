import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DashboardService } from '../../../../services/dashboard.service';
import { MatButtonModule } from '@angular/material/button';
import { WidgetsPanelComponent } from '../widgets-panel/widgets-panel.component';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    WidgetsPanelComponent,
    CdkDropList, CdkDrag
  ],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss',
})
export class DashboardHeaderComponent {
  store = inject(DashboardService);

  widgetsOpen = signal(false);

  widgetPutBack(event: CdkDragDrop<number, any>) {
    const { previousContainer } = event;

    this.store.removeWidget(previousContainer.data);
  }
}
