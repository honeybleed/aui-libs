<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/honeybleed/aui-libs-icon/master/demo/src/assets/logo.svg">
</p>

# aui-libs-icon - Angular library built with ❤ using ngx-library yeoman generator.

[![npm version](https://badge.fury.io/js/aui-libs-icon.svg)](https://badge.fury.io/js/aui-libs-icon)
[![Build Status](https://travis-ci.org/honeybleed/aui-libs-icon.svg?branch=master)](https://travis-ci.org/honeybleed/aui-libs-icon)
[![Coverage Status](https://coveralls.io/repos/github/honeybleed/aui-libs-icon/badge.svg?branch=master)](https://coveralls.io/github/honeybleed/aui-libs-icon?branch=master)
[![dependency Status](https://david-dm.org/honeybleed/aui-libs-icon/status.svg)](https://david-dm.org/honeybleed/aui-libs-icon)
[![devDependency Status](https://david-dm.org/honeybleed/aui-libs-icon/dev-status.svg?branch=master)](https://david-dm.org/honeybleed/aui-libs-icon#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/honeybleed/aui-libs-icon.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://honeybleed.github.io/aui-libs-icon

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `@aui/icon` via:
```shell
npm install --save @aui/icon
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `@aui/icon`:
```js
map: {
  '@aui/icon': 'node_modules/@aui/icon/bundles/icon.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from '@aui/icon';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from '@aui/icon';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from '@aui/icon';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2017 Aaron. Licensed under the MIT License (MIT)

