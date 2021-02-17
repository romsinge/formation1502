import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productFormGroup: FormGroup
  errorMessages: any = {
    required: 'Field required',
    minlength: '2 characters required'
  }

  constructor(private dataS: DataService, private router: Router) { }

  ngOnInit() {
    this.productFormGroup = new FormGroup({
      title: new FormControl('', [ Validators.required, Validators.minLength(2) ]),
      description: new FormControl('', [ Validators.required, Validators.minLength(2) ]),
      price: new FormControl(0, [ Validators.min(1) ]),
      category: new FormControl('', [ Validators.required, Validators.minLength(2) ]),
      image: new FormControl('', [ Validators.required, Validators.minLength(2) ])
    })
  }

  handleSubmit() {
    this.dataS.saveProduct(this.productFormGroup.value).subscribe(product => {
      console.log('PRODUCT SAVED : ', product)
      this.router.navigate(['/catalog/product', product.id])
    })
  }

}
