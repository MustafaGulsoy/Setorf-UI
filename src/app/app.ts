import { Component } from '@angular/core';
import { NavbarComponent } from './sections/navbar/navbar';
import { HeroComponent } from './sections/hero/hero';
import { HakkimizdaComponent } from './sections/hakkimizda/hakkimizda';
import { UrunlerComponent } from './sections/urunler/urunler';
import { NedenBizComponent } from './sections/neden-biz/neden-biz';
import { GaleriComponent } from './sections/galeri/galeri';
import { IletisimComponent } from './sections/iletisim/iletisim';
import { FooterComponent } from './sections/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    HakkimizdaComponent,
    UrunlerComponent,
    NedenBizComponent,
    GaleriComponent,
    IletisimComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  title = 'SETORF';
}
