import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ctfk-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() showModal: boolean = false
  @Output() closeModal = new EventEmitter<void>()

  onCloseModal() {
    console.log("Close me")
    this.closeModal.emit();
  }

  onModalContentClick(event: Event) {
    console.log("Content Clicked")
    event.stopPropagation();
  }
}
