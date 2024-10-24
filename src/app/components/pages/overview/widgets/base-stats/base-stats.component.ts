import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { OverviewWidget } from '../../../../../interfaces/overview';
import { CommonModule } from '@angular/common';
import { BillionFormatPipe } from '../../../../../pipes/billion-format.pipe';
import { QuarterFormatPipe } from '../../../../../pipes/quarter-format.pipe';

@Component({
  selector: 'app-base-stats',
  standalone: true,
  imports: [MatIcon, CommonModule, BillionFormatPipe, QuarterFormatPipe],
  templateUrl: './base-stats.component.html',
  styleUrl: './base-stats.component.scss'
})
export class BaseStatsComponent {

  @Input() data!: OverviewWidget;
}
