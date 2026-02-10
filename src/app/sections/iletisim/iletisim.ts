import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-iletisim',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './iletisim.html',
  styleUrl: './iletisim.scss',
})
export class IletisimComponent {}
