import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@progress/kendo-angular-grid';

import { CompanyService } from './company.service';
import { CompaniesAdmin } from './companies-admin';

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule,GridModule],
    declarations: [ CompaniesAdmin ],
    providers: [
        CompanyService
    ],
    entryComponents: [
        CompaniesAdmin
    ],
    
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    bootstrap: [CompaniesAdmin]
})
export class CompaniesAdminAppModule {
    ngDoBootstrap(): void {
    }
}
