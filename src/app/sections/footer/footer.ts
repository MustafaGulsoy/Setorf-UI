import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  navLinks = [
    { label: 'Ana Sayfa', href: '#hero' },
    { label: 'Hakkimizda', href: '#hakkimizda' },
    { label: 'Urunler', href: '#urunler' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Iletisim', href: '#iletisim' },
  ];

  products = [
    'Torf', 'Bahce Topragi', 'Saksi Topragi',
    'Gubre', 'Perlit', 'Profesyonel Karisim',
  ];
}
