import { Component, OnInit } from '@angular/core';
import { Product } from './Product';
import { ProductService, IProduct } from './product.service';
import { FormControl } from '@angular/forms';

export class EmailValidator {

    static isValidMailFormat(control: FormControl) {
        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "Please provide a valid email": true };
        }

        return null;
    }

}

@Component({
    moduleId: __filename,
    selector: 'pform',
    templateUrl: './app/productForm.component.html'    
 })

export class ProductForm {
    constructor(private _service: ProductService) {
      
    }
    model = new Product(0,'','');
    submitted = false;
    
    onSubmit() { 
        console.log("Sumbitted Form ! ");
        this.submitted = true; 
        this._service.Add(this.model).then(data => {
           this._service.announceChange(1212);
        })
    }

        
  // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}
