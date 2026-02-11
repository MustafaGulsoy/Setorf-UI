import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-urunler',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './urunler.html',
  styleUrl: './urunler.scss',
})
export class UrunlerComponent {
  categories = [
    {
      title: 'Torf',
      description: 'Yüksek kaliteli sphagnum torf. Fide yetiştirme ve toprak ıslahı için ideal.',
      image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=600&q=80',
    },
    {
      title: 'Bahçe Toprağı',
      description: 'Zengin besin içerikli bahçe toprağı. Her türlü bitki için uygun.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    },
    {
      title: 'Saksı Toprağı',
      description: 'Özel formüllü saksı toprağı. Ev ve ofis bitkileri için hazır karışım.',
      image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80',
    },
    {
      title: 'Gübre',
      description: 'Organik ve mineral gübreler. Bitkilerinizin beslenme ihtiyacı için.',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&q=80',
    },
    {
      title: 'Perlit',
      description: 'Havalandırma ve drenaj için perlit. Toprak yapısını iyileştirir.',
      image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=600&q=80',
    },
    {
      title: 'Profesyonel Karışım',
      description: 'Özel projeler için hazır toprak karışımları. Sera ve peyzaj uygulamaları.',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80',
    },
  ];
}
