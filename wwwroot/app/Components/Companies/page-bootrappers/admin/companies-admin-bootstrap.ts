import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CompaniesAdminAppModule } from '../../CompaniesAdmin.app.module';

import { UpgradeModule } from "@angular/upgrade/static";

const platform = platformBrowserDynamic();
platform.bootstrapModule(CompaniesAdminAppModule);