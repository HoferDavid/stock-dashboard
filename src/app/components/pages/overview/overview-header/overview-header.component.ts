import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';
import { OverviewService } from '../../../../services/overview.service';

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
  overviewService = inject(OverviewService);

  // widgetsOpen = signal(false);

  // widgetPutBack(event: CdkDragDrop<number, any>) {
  //   const { previousContainer } = event;

  //   this.store.removeWidget(previousContainer.data);
  // }
}
