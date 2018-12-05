import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@progress/kendo-angular-grid';

import { CompanyService } from './company.service';
import { Companies } from './companies';

@NgModule({
    imports: [BrowserModule,
        HttpModule,GridModule],
    declarations: [ Companies ],
    providers: [
        CompanyService
    ],
    entryComponents: [
        Companies
    ],
    
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    bootstrap: [Companies]
})

export class CompaniesAppModule {
    ngDoBootstrap(): void {
    }
}
