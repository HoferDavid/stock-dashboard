import { Component, inject, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { OverviewService } from '../../../../../services/overview.service';
import { OverviewWidget } from '../../../../../interfaces/overview';

@Component({
  selector: 'app-base-stats',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './base-stats.component.html',
  styleUrl: './base-stats.component.scss'
})
export class BaseStatsComponent {
  overviewService = inject(OverviewService);

  data = input.required<OverviewWidget>();
}
