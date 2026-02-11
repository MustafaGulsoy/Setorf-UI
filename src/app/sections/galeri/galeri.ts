import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-galeri',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './galeri.html',
  styleUrl: './galeri.scss',
})
export class GaleriComponent {
  images = [
    { src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', alt: 'Verimli bahçe toprağı' },
    { src: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=600&q=80', alt: 'Torf toprak üretimi' },
    { src: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=600&q=80', alt: 'Fide yetiştirme' },
    { src: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80', alt: 'Sera uygulaması' },
    { src: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80', alt: 'Saksı bitkileri' },
    { src: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=600&q=80', alt: 'Organik gübre' },
    { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80', alt: 'Tarım alanı' },
    { src: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80', alt: 'Peyzaj çalışması' },
    { src: 'https://images.unsplash.com/photo-1587334274328-64186a80aaee?w=600&q=80', alt: 'Toprak hazırlama' },
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80', alt: 'Bahçe düzeni' },
    { src: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=80', alt: 'Bitki bakımı' },
    { src: 'https://images.unsplash.com/photo-1483794344563-d27a8d18014e?w=600&q=80', alt: 'Profesyonel sera' },
  ];
}
