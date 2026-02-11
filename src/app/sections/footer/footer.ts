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
    { label: 'Hakkımızda', href: '#hakkimizda' },
    { label: 'Ürünler', href: '#urunler' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'İletişim', href: '#iletisim' },
  ];

  products = [
    'Torf', 'Bahçe Toprağı', 'Saksı Toprağı',
    'Gübre', 'Perlit', 'Profesyonel Karışım',
  ];
}
