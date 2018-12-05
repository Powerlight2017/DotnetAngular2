import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@progress/kendo-angular-grid';

import { ProductService } from './Product.service';
import { Products } from './Products';

@NgModule({
    imports: [BrowserModule,
        HttpModule,GridModule],
    declarations: [ Products ],
    providers: [
        ProductService
    ],
    entryComponents: [
        Products
    ],
    
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    bootstrap: [Products]
})

export class ProductsAppModule {
    ngDoBootstrap(): void {
    }
}
