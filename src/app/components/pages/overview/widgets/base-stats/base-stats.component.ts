import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { OverviewService } from '../../../../../services/overview.service';

@Component({
  selector: 'app-base-stats',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './base-stats.component.html',
  styleUrl: './base-stats.component.scss'
})
export class BaseStatsComponent {
  overviewService = inject(OverviewService);

}
