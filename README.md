<p align="center">
  <img src="https://github.com/Fdebijl/clog/raw/master/img/logo.png">
</p>

# CLOG Logger utility

Simple logging utility for reuse in my personal projects

**Installation**:
```
npm install -S @fdebijl/clog
```


**Usage**:
```ts
import clog from 'clog';

const clog = new Clog(LOGLEVEL.WARN);
clog.log('This is an error', LOGLEVEL.ERROR);
```