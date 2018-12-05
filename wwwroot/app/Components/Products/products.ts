import { Component, OnInit, Input } from '@angular/core';
import { Product } from './Product';
import { ProductService, IProduct } from './Product.service';
import { FormControl } from '@angular/forms';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';

// http://www.c-sharpcorner.com/article/server-side-paging-in-kendo-grid-for-angular-2/

@Component({
    moduleId: __filename,
    selector: 'cform',
    templateUrl: './app/Products.html'
})

export class Products {
    constructor(private _service: ProductService) {
        this.Refresh();
    }

    // Grid
    private gridView: GridDataResult;
    private pageSize: number = 10;
    private skip: number = 0;
    private data: Object[];

    // Источник данных
    Products: IProduct[] = [];

    submitted = false;

    Refresh() {
         
        this._service.loadDataPaged(this.skip,  this.pageSize).then(data => {
            this.Products = data.productList;
            
            this.gridView = {
                data: this.Products,
                total: data.count
            };
        })

    }
    
    // Пэйджинг
    protected pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.Refresh();
    }

}
