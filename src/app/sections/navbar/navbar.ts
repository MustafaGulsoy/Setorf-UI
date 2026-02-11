import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  navLinks = [
    { label: 'Ana Sayfa', href: '#hero' },
    { label: 'Hakkımızda', href: '#hakkimizda' },
    { label: 'Ürünler', href: '#urunler' },
    { label: 'Neden Biz', href: '#neden-biz' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'İletişim', href: '#iletisim' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
