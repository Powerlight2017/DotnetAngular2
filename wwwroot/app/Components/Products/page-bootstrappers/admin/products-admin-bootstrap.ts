import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProductsAdminAppModule } from '../../ProductsAdmin.app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(ProductsAdminAppModule);