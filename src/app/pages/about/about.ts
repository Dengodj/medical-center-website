import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { App } from '../../app';
import { AppService } from '../../services/service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected app = inject(App);
  private router = inject(Router);
  private appService = inject(AppService);
  langData = computed(() => this.appService.text());
}
  