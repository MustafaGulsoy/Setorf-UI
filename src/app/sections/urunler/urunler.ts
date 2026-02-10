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
      description: 'Yuksek kaliteli sphagnum torf. Fide yetistirme ve toprak islahi icin ideal.',
      image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=600&q=80',
      icon: '🌱',
    },
    {
      title: 'Bahce Topragi',
      description: 'Zengin besin icerikli bahce topragi. Her turlu bitki icin uygun.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
      icon: '🌿',
    },
    {
      title: 'Saksi Topragi',
      description: 'Ozel formullu saksi topragi. Ev ve ofis bitkileri icin hazir karisim.',
      image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80',
      icon: '🪴',
    },
    {
      title: 'Gubre',
      description: 'Organik ve mineral gubreler. Bitkilerinizin beslenme ihtiyaci icin.',
      image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&q=80',
      icon: '🧪',
    },
    {
      title: 'Perlit',
      description: 'Havalandirma ve drenaj icin perlit. Toprak yapisini iyilestirir.',
      image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=600&q=80',
      icon: '⚪',
    },
    {
      title: 'Profesyonel Karisim',
      description: 'Ozel projeler icin hazir toprak karisimlari. Sera ve peyzaj uygulamalari.',
      image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80',
      icon: '🔬',
    },
  ];
}
