import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UsersAdminAppModule } from '../../UsersAdmin.app.module';

import { UpgradeModule } from "@angular/upgrade/static";

const platform = platformBrowserDynamic();
platform.bootstrapModule(UsersAdminAppModule);