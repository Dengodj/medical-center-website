import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ModalState {
  isOpen: boolean;
  selectedCategory?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalState$ = new BehaviorSubject<ModalState>({ isOpen: false });

  state$ = this.modalState$.asObservable();

  open(category?: string) {
    this.modalState$.next({ isOpen: true, selectedCategory: category });
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.modalState$.next({ isOpen: false });
    document.body.style.overflow = '';
  }
}
