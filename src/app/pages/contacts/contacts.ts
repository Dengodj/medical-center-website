import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '../../app';
import { AppService } from '../../services/service';

@Component({
  selector: 'app-contacts',
  imports: [CommonModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss',
})
export class Contacts {
  protected app = inject(App);
  private router = inject(Router);
  private appService = inject(AppService);

  langData = computed(() => this.appService.text());

  public sendMessage() {
    console.log('Повідомлення відправлено!');

    this.router.navigate(['/']);
  }
}
