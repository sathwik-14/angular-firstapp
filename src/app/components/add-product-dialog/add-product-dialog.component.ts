import { Component, Inject ,Output,EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-product-dialog',
  templateUrl: './add-product-dialog.component.html'
})
export class AddProductDialogComponent {
  @Output() dataSubmitted = new EventEmitter<{ [key: string]: any }>();
  // productForm: FormGroup;
  productId: string ='';
  productName: string='';
  productDescription: string='';
  productAmount: number =0;

  submitForm() {
    // Handle form submission

    const formData: { [key: string]: any } = {
      'id': this.productId,
      'name': this.productName,
      'description':this.productDescription,
      'amount':this.productAmount
    };
    this.dataSubmitted.emit(formData);
    this.showmodal = !this.showmodal;
  }
  showmodal: boolean = false; // Initialize the flag




  showModal() {
    this.showmodal = !this.showmodal;
  }

  // constructor(
  //   private dialogRef: MatDialogRef<AddProductDialogComponent>,
  //   @Inject(MAT_DIALOG_DATA) private data: any,
  //   private formBuilder: FormBuilder
  // ) {
  //   this.productForm = this.formBuilder.group({
  //     name: ['', Validators.required],
  //     description: ['', Validators.required],
  //     amount: [null, Validators.required]
  //   });
  // }

  // onSubmit() {
  //   if (this.productForm.valid) {
  //     const product = {
  //       name: this.productForm.value.name,
  //       description: this.productForm.value.description,
  //       amount: this.productForm.value.amount
  //     };
  //     this.dialogRef.close(product);
  //   }
  // }
}
