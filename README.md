<p align="center">
  <img src="https://github.com/Fdebijl/clog/raw/master/img/logo.png">
</p>

# Clog Logging utility

Simple logging utility for reuse in my personal projects.
[View on NPM](https://www.npmjs.com/package/@fdebijl/clog).

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
