import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { OverviewWidget } from '../../../../../interfaces/overview';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-stats',
  standalone: true,
  imports: [MatIcon, CommonModule],
  templateUrl: './base-stats.component.html',
  styleUrl: './base-stats.component.scss'
})
export class BaseStatsComponent {
  // overviewService = inject(OverviewService);

  // data = input.required<OverviewWidget>();

  @Input() data!: OverviewWidget;
}
