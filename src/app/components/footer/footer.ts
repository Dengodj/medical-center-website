import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { AppService } from '../../services/service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private appService = inject(AppService);

  langData = computed(() => this.appService.text());
}
