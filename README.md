# Angular 2 via JSPM

## Prepare

```bash
$ git clone https://github.com/mainnika/angular2-jspm-demo.git
$ cd angular2-jspm-demo
$ npm install
$ typings install
$ jspm install
```

## Build

```bash
$ gulp guild
```

## Build bundle

```bash
$ jspm bundle app dist/bundle.js --minify --skip-source-maps
```

## Try

```bash
$ http-server ./dist
```

Open http://127.0.0.1:8080/ to see angular2.