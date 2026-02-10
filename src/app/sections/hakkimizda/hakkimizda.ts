import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-hakkimizda',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './hakkimizda.html',
  styleUrl: './hakkimizda.scss',
})
export class HakkimizdaComponent {}
