# node-wos
Node What Operation System - Utility for operation system informations

## What is this?
`node-wos` is a small wrapper to help you with the most commom operation system informations.

## Installation

```bash
npm i node-wos --save
```

## Example

```javascript
var wos = require('node-wos');

console.log(wos.isLinux());
console.log(wos.platform);

console.log(wos.arch);

// Container to require('os')
console.log(wos.OS);

```

## Documentation

### `NodeWOS.platform`
Return the currrent platform.

#### return
- **String** Plataform can be `windows, linux, mac, freeBSD, solaris`


### `NodeWOS.arch`
Return the currrent architecture.

#### return
- **String** Architecture can be `64bit, 32bit, ARM`.

### `NodeWOS.OS`
Container to the NodeJS OS module available on `require('os')`.

#### return
- **Object** Equals to `require('os')`

### `NodeWOS.isWindows()`
Verify if the current os is windows.

#### return
- **Boolean**

### `NodeWOS.isLinux()`
Verify if the current os is linux.

#### return
- **Boolean**

### `NodeWOS.isMac()`
Verify if the current os is mac.

#### return
- **Boolean**

### `NodeWOS.isSolaris()`
Verify if the current os is solaris.

#### return
- **Boolean**

### `NodeWOS.isFreeBSD()`
Verify if the current os is freeBSD.

#### return
- **Boolean**

### `NodeWOS.getOSName()` *It's very incomplete*
Attemp to discover what the current operation system name. Ex: ubuntu, fedora...

#### return
- **String** Operation system name or *`{plataform} {arch}`*


## Contributing
`node-wos` is built using *ecma script 6* and use [babeljs]( https://babeljs.io/) to convert the code. To develop your changes just clone the project and execute the grunt task.

```bash
git clone https://github.com/mapaiva/node-wos.git
cd node-wos
npm install
npm install -g grunt-cli
grunt dev
```

## License
Copyright (c) 2015 Matheus Paiva (GPL-2.0) GNU GENERAL PUBLIC LICENSE
