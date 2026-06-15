import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { App } from '../../app';
import { ModalService } from '../../services/modal.service';
import { AppService } from '../../services/service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  bookingForm!: FormGroup;
  isSubmitted = false;

  protected app = inject(App);
  protected router = inject(Router);
  private appService = inject(AppService);
  private fb = inject(FormBuilder);
  public modalService = inject(ModalService);
  public langData = computed(() => this.appService.text());

  public goToServices() {
    this.router.navigate(['/services']);
  }

  ngOnInit() {
    this.initForm();

    this.modalService.state$.subscribe((state) => {
      if (state.isOpen && state.selectedCategory) {
        this.bookingForm.patchValue({ department: state.selectedCategory });
      }
    });
  }

  private initForm() {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(\+?\d{1,3})?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}$/,
          ),
        ],
      ],
      department: ['', Validators.required],
    });
  }

  onBook(categoryKey: string) {
    const currentTranslations = this.langData();
    const categoryName = currentTranslations['SERVICES']?.[categoryKey] || 'General';

    this.modalService.open(categoryName);
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      this.isSubmitted = true;
      console.log('Данные лида отправлены в API:', this.bookingForm.value);

      setTimeout(() => {
        this.modalService.close();
        this.bookingForm.reset();
        this.isSubmitted = false;
      }, 3000);
    } else {
      this.bookingForm.markAllAsTouched();
    }
  }
}
