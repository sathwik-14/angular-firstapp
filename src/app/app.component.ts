import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductDialogComponent } from './components/add-product-dialog/add-product-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: any[] = [
    { id: 1, name: 'Pen', description: 'Ballpoint pen', amount: 10 },
    { id: 2, name: 'Notebook', description: 'Spiral-bound notebook', amount: 20 },
    { id: 3, name: 'Pencil', description: 'Wooden pencil', amount: 5 },
    { id: 4, name: 'Highlighter', description: 'Fluorescent highlighter', amount: 8 },
    { id: 5, name: 'Eraser', description: 'Rubber eraser', amount: 3 },
    { id: 6, name: 'Markers', description: 'Colorful markers', amount: 15 },
    { id: 7, name: 'Sticky Notes', description: 'Adhesive sticky notes', amount: 7 },
    { id: 8, name: 'Ruler', description: 'Plastic ruler', amount: 2 },
    { id: 9, name: 'Scissors', description: 'Office scissors', amount: 12 },
    { id: 10, name: 'Paper Clips', description: 'Metal paper clips', amount: 1 }
  ];


  showTable: boolean = false; // Initialize the flag

  handleData(formData: { [key: string]: any }) {
    // Process the received data here

    this.products.push(formData)
    // ... do something with the data
  }

  toggleTable() {
    this.showTable = !this.showTable;
  }
  deleteProduct(productId: number) {
    // Perform the delete operation based on the productId
    // For example: Remove the product from the products array

    this.products = this.products.filter(product => product.id !== productId);
  }
}
