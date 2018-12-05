import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProductsAppModule } from '../../Products.app.module';



const platform = platformBrowserDynamic();
platform.bootstrapModule(ProductsAppModule);