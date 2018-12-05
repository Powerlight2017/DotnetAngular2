import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@progress/kendo-angular-grid';

import { UserService } from './user.service';
import { UsersAdmin } from './users-admin';

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule,GridModule],
    declarations: [ UsersAdmin ],
    providers: [
        UserService
    ],
    entryComponents: [
        UsersAdmin
    ],
    
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    bootstrap: [UsersAdmin]
})
export class UsersAdminAppModule {
    ngDoBootstrap(): void {
    }
}
