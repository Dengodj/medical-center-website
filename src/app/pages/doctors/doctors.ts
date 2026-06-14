import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '../../app';
import { AppService } from '../../services/service';

@Component({
  selector: 'app-doctors',
  imports: [CommonModule],
  templateUrl: './doctors.html',
  styleUrl: './doctors.scss',
})
export class Doctors {
  protected app = inject(App);
  private router = inject(Router);
  private appService = inject(AppService);
  langData = computed(() => this.appService.text());
}
