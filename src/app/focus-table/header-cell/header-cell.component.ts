import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Column } from '../column.interface';

@Component({
  selector: 'app-header-cell',
  templateUrl: './header-cell.component.html',
  styleUrls: ['./header-cell.component.css']
})
export class HeaderCellComponent implements OnInit {
  @Input() column: Column;
  @Input() columns: Array<string>;
  @Output() onChanged = new EventEmitter();
  isEdit = false;
  newColumn: Column;

  enableEdit(): void {
    this.newColumn = Object.assign({}, this.column);
    this.isEdit = true;
  }
  disableEdit(): void {
    this.isEdit = false;
  }
  confimEdit(): void {
    this.onChanged.emit(this.newColumn);
    this.disableEdit();
  }

  constructor() {
  }

  ngOnInit() {
  }

}
