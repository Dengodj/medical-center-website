import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '../../app';
import { AppService } from '../../services/service';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected app = inject(App);
  protected router = inject(Router);
  private appService = inject(AppService);
  langData = computed(() => this.appService.text());

  public goToServices() {
    this.router.navigate(['/services']);
  }
}
