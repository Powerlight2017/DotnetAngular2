import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@progress/kendo-angular-grid';

import { ProductService } from './Product.service';
import { ProductsAdmin } from './Products-admin';

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule,GridModule],
    declarations: [ ProductsAdmin ],
    providers: [
        ProductService
    ],
    entryComponents: [
        ProductsAdmin
    ],
    
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    bootstrap: [ProductsAdmin]
})
export class ProductsAdminAppModule {
    ngDoBootstrap(): void {
    }
}
