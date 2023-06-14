import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
})
export class DeleteButtonComponent {
  showmodal: boolean = false; // Initialize the flag




  showConfirmodal() {
    this.showmodal = !this.showmodal;
  }
  @Input() productId!: number;
  constructor() {
    this.productId = 0; // Or any other default value
  }
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.productId);
  }
}
