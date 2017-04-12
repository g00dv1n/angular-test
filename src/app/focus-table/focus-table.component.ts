import { Component, HostListener } from '@angular/core';
import KeyCodes from './key-codes.enum';
import { Column } from './column.interface';

// Fake data for demonstration
const table: Array<Object> = [
  {type: 'Acer A100', id: 235, price: 1024.34, inStock: true},
  {type: 'Liquid S1 Duo', id: 543, price: 924.34, inStock: false},
  {type: 'iNew V3 (black)', id: 864, price: 527.00, inStock: true},
  {type: 'Acer V370 Liquid E2 Duo', id: 235, price: 2024.34, inStock: true},
  {type: 'Liquid 500', id: 689, price: 824.34, inStock: false},
  {type: 'Acer Z150', id: 297, price: 327.00, inStock: true},
  {type: 'Acer A100', id: 235, price: 1024.34, inStock: true},
  {type: 'Liquid S1 Duo', id: 543, price: 924.34, inStock: false},
  {type: 'iNew V3 (black)', id: 864, price: 527.00, inStock: true},
  {type: 'Acer V370 Liquid E2 Duo', id: 235, price: 2024.34, inStock: true},
  {type: 'Liquid 500', id: 689, price: 824.34, inStock: false},
  {type: 'Acer Z150', id: 297, price: 327.00, inStock: true}
];
// Setup columns for fake data
const columns: Array<Column> = [
  {
    header: 'Type',
    dataIndex: 'type'
  },
  {
    header: 'Id',
    dataIndex: 'id'
  },
  {
    header: 'Price',
    dataIndex: 'price'
  },
  {
    header: 'In Stock',
    dataIndex: 'inStock'
  }
];


interface FocusPosition {
  x: number;
  y: number;
  edit: boolean;
}

@Component({
  selector: 'app-focus-table',
  templateUrl: './focus-table.component.html',
  styleUrls: ['./focus-table.component.css'],
})
export class FocusTableComponent {

  table: Array<Object> = table;
  columns: Array<Column> = columns;
  selectedColumns: Array<Column>;
  focusPosition: FocusPosition = {x: 0, y: 0, edit: false};

  constructor() {
    this.selectedColumns = [...this.columns];
  }

  @HostListener('window:keydown', ['$event'])
  keyHandler($event): void {
    const keyCode = $event.keyCode;
    switch (keyCode) {
      case KeyCodes.Up: {
        console.log('up');
        this.upPress();
        break;
      }
      case KeyCodes.Left: {
        console.log('left');
        this.leftPress();
        break;
      }
      case KeyCodes.Down: {
        console.log('down');
        this.downPress();
        break;
      }
      case KeyCodes.Right: {
        console.log('right');
        this.rightPress();
        break;
      }
    }
  }

  setValue(value: any): void {
    const arrayIndex = this.focusPosition.y;
    const prop = this.selectedColumns[this.focusPosition.x].dataIndex;
    this.table[arrayIndex][prop] = value;
  }

  leftPress(): void {
    const x = this.focusPosition.x;
    this.focusPosition.x = x === 0 ? x : x - 1;
  }

  rightPress(): void {
    const x = this.focusPosition.x;
    this.focusPosition.x = x + 1 === this.selectedColumns.length ? x : x + 1;
  }

  upPress(): void {
    const y = this.focusPosition.y;
    this.focusPosition.y = y === 0 ? y : y - 1;
  }

  downPress(): void {
    const y = this.focusPosition.y;
    this.focusPosition.y = y + 1 === this.table.length ? y : y + 1;
  }

  isFocus(x: number, y: number): boolean {
    return x === this.focusPosition.x && y === this.focusPosition.y;
  }

  setFocus(x: number, y: number): void {
    this.focusPosition.x = x;
    this.focusPosition.y = y;
  }
  // Handle change in object field
  onChanged(value: any): void {
    this.setValue(value);
  }
  // Handle change in column
  saveColumn(column: Column, index: number) {
    this.selectedColumns[index] = column;
  }

}
