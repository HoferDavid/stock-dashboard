import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { OverviewHeaderComponent } from "./overview-header/overview-header.component";
import { OverviewService } from '../../../services/overview.service';
import { BaseStatsComponent } from "./widgets/base-stats/base-stats.component";

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    OverviewHeaderComponent,
    BaseStatsComponent
],
  providers: [OverviewService],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  overviewService = inject(OverviewService);

  overview = viewChild.required<ElementRef>('overview');

}

  // overview = viewChild.required<ElementRef>('overview');

  // clearAnimations = () => {};

  // ngOnInit(): void {
  //   const { unwrapGrid } = wrapGrid(this.overview().nativeElement, {
  //     duration: 300,
  //   });
  //   this.clearAnimations = unwrapGrid;
  // }

  // ngOnDestroy(): void {
  //   this.clearAnimations();
  // }

  // drop(event: CdkDragDrop<number, any>) {
  //   const {
  //     previousContainer,
  //     container,
  //     item: { data },
  //   } = event;

  //   if (data) {
  //     this.store.insertWidgetAtPosition(data, container.data);
  //     return;
  //   }

  //   this.store.updateWidgetPosition(previousContainer.data, container.data);
  // }