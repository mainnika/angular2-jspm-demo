(function (global) {

    var map: SystemJSLoader.ConfigMap = {
        '@angular': 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs',
        'core.js': 'node_modules/core-js/client',
        'zone.js': 'node_modules/zone.js/dist',
        'reflect-metadata': 'node_modules/reflect-metadata',
        'app': 'lib',
    };

    var packages: SystemJSLoader.PackageList<SystemJSLoader.PackageConfig> = {
        '@angular/common': { main: 'common.umd.js' },
        '@angular/compiler': { main: 'compiler.umd.js' },
        '@angular/core': { main: 'core.umd.js' },
        '@angular/http': { main: 'http.umd.js' },
        '@angular/platform-browser-dynamic': { main: 'platform-browser-dynamic.umd.js' },
        '@angular/platform-browser': { main: 'platform-browser.umd.js' },
        '@angular/router-deprecated': { main: 'router-deprecated.umd.js' },
        '@angular/router': { main: 'router.umd.js' },
        '@angular/upgrade': { main: 'upgrade.umd.js' },
        'app': { main: 'index.js' },
        'core.js': { main: 'shim.min.js', format: 'global' },
        'zone.js': { main: 'zone.min.js', format: 'global' },
        'reflect-metadata': { main: 'Reflect.js', format: 'global' },
        'rxjs': {},
    };

    System.config({
        map: map,
        packages: packages
    });

    System.import('core.js');
    System.import('zone.js');
    System.import('reflect-metadata');

})(this);