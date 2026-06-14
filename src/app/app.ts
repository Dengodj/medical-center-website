import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, signal, ViewEncapsulation } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { NavBar } from './components/nav-bar/nav-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, NavBar, Main],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('medical-center');

  public currentLang = signal<string>('ua');
  public langData = signal<Record<string, any>>({});

  private http = inject(HttpClient);
  private router = inject(Router);

  constructor() {
    effect(() => {
      this.loadLang(this.currentLang());
    });
  }

  private loadLang(lang: string) {
    this.http.get(`./i18n/${lang}.json`).subscribe({
      next: (json) => this.langData.set(json),
      error: (err) => console.error('Ошибка загрузки перевода:', err),
    });
  }

  public changeLang(lang: string) {
    this.currentLang.set(lang);
  }

  public navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
