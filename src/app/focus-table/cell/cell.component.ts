import { Component, OnChanges, Input, Output, EventEmitter, HostListener } from '@angular/core';
import KeyCodes from '../key-codes.enum';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnChanges {

  @Input() isFocus: boolean;
  @Input() value: string | number | boolean;
  @Output() onChanged = new EventEmitter();
  isEdit = false;
  newValue: string | number | boolean;

  constructor() {
  }

  ngOnChanges() {
      // Refresh isEdit flag after focus changed
      this.isEdit = this.isFocus && this.isEdit;
  }

  toggleEdit(): void {
    // Make field editable
    if (this.isFocus && !this.isEdit) {
      this.newValue = this.value;
      this.isEdit = true;
      return;
    }
    // Save changes
    if (this.isFocus && this.isEdit) {
      this.isEdit = false;
      this.onChanged.emit(this.newValue);
      return;
    }
    if (!this.isFocus) {
      this.isEdit = false;
      return;
    }
  }

  @HostListener('window:keydown', ['$event'])
  keyHandler($event): void {
    const keyCode = $event.keyCode;
    switch (keyCode) {
      case KeyCodes.Esc: {
        this.isEdit = false;
        break;
      }
      case KeyCodes.Enter: {
        this.toggleEdit();
        break;
      }

    }
  }

}
