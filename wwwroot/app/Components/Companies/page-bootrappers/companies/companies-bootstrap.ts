import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CompaniesAppModule } from '../../Companies.app.module';
import { UpgradeModule } from "@angular/upgrade/static";

const platform = platformBrowserDynamic();
platform.bootstrapModule(CompaniesAppModule);