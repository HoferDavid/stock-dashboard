import { Component, input } from '@angular/core';
import { Widget } from '../../interfaces/widget';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss'
})
export class WidgetComponent {
  data = input.required<Widget>();
}