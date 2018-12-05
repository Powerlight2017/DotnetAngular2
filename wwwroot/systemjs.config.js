/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */




(function (global) {

    // var baseURL: location.protocol + '//' + location.host,
    var paths = {
        // paths serve as alias
        'npm:': '../node_modules/'
    }
    // map tells the System loader where to look for things
    var map = {
        // our app is within the app folder
        '../Components/': 'components/',
        // angular bundles
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        // other libraries
        'rxjs': 'npm:rxjs'


    }

    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade',
    ];

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {

        rxjs: {
            defaultExtension: 'js'
        },

        // companies

        'app/Components/Companies/page-bootrappers/admin': {
            defaultExtension: 'js',
            main: 'admin-bootstrap.js'
        },

        'app/Components/Companies/page-bootrappers/companies': {
            defaultExtension: 'js',
            main: 'companies-bootstrap.js'
        },

        // Products
        'app/Components/products/page-bootstrappers/admin': {
            defaultExtension: 'js',
            main: 'admin-bootstrap.js'
        },

        'app/Components/products/page-bootstrappers/products': {
            defaultExtension: 'js',
            main: 'products-bootstrap.js'
        },

        // Users (admin only)
        'app/Components/users/page-bootstrappers/admin': {
            defaultExtension: 'js',
            main: 'admin-bootstrap.js'
        }

    }


    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }
    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    }
    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages,
        paths: paths
    };
    System.config(config);
   
})(this);