<p align="center">
  <img src="https://github.com/Fdebijl/clog/raw/master/img/logo.png">
</p>

# CLOG Logger utility
<p align="center>
          
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/@fdebijl/clog) ![npm (scoped with tag)](https://img.shields.io/npm/v/@fdebijl/clog/latest)

</p>

Simple logging utility for reuse in my personal projects

### Installation:
```
npm install -S @fdebijl/clog
```


### Usage:

TS:
```ts
import { Clog, LOGLEVEL } from '@fdebijl/clog';

const clog = new Clog(LOGLEVEL.WARN);
clog.log('This is an error', LOGLEVEL.ERROR);
```

JS:
```js
const { Clog, LOGLEVEL } = require('@fdebijl/clog');

const clog = new Clog(LOGLEVEL.WARN);
clog.log('This is an error', LOGLEVEL.ERROR);
```
