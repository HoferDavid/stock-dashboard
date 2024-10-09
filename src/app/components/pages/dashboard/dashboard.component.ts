import { Component } from '@angular/core';
import { WidgetComponent } from '../../widget/widget.component';
import { Widget } from '../../../interfaces/widget';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [WidgetComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  // data: Widget = {
  //   id: 1,
  //   label: 'AAPL',
  //   content: 
  // }
}
