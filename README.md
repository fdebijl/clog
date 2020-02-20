# CLOG Logger utility

Simple logging utility I can reuse in my personal projects

*Installation*:
```
npm install -S @fdebijl/clog
```

*Installation*:
```ts
import clog from 'clog';

const clog = new Clog(LOGLEVEL.WARN);
clog.log('This is an error', LOGLEVEL.ERROR);
```