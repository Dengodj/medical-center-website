import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private http = inject(HttpClient);

  currentLang = signal<string>('ua');
  text = signal<Record<string, any>>({});

  constructor() {
    this.loadTranslations(this.currentLang());
  }

  changeLanguage(lang: string) {
    this.currentLang.set(lang);
    this.loadTranslations(lang);
  }

  private loadTranslations(lang: string) {
    this.http.get<Record<string, any>>(`i18n/${lang}.json`).subscribe({
      next: (data) => {
        this.text.set(data);
      },
      error: (err) => {
        console.error(`Не удалось загрузить JSON перевода из public для языка: ${lang}`, err);
      },
    });
  }
}
