<p align="center">
  <img src="https://github.com/Fdebijl/clog/raw/master/img/logo.png">
</p>

# CLOG Logger utility
<p align="center>
          
![Release](https://github.com/Fdebijl/clog/workflows/Release/badge.svg) [![DeepScan grade](https://deepscan.io/api/teams/7525/projects/9659/branches/128332/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=7525&pid=9659&bid=128332) [![BCH compliance](https://bettercodehub.com/edge/badge/Fdebijl/clog?branch=master)](https://bettercodehub.com/) ![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/@fdebijl/clog) ![npm (scoped with tag)](https://img.shields.io/npm/v/@fdebijl/clog/latest)

</p>


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
