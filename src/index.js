import os from 'os';
import { execSync } from 'child_process';

/**
 * @class NodeWOS
 * NodeJS utility for OS information
*/
class NodeWOS {
  constructor() {
    let platform, arch;

    switch (process.platform) {
      case 'win32':
        platform = 'windows';
        break;
      case 'linux':
        platform = 'linux';
        break;
      case 'darwin':
        platform = 'mac';
        break;
      case 'freebsd':
        platform = 'freeBSD';
        break;
      case 'sunos':
        platform = 'solaris';
        break;
      default:
        platform = process.platform;
        break;
    }

    switch (process.arch) {
      case 'x64':
        arch = '64bit';
        break;
      case 'ia32':
        arch = '32bit';
      case 'arm':
        arch = 'ARM';
      default:
        arch = process.arch;
        break;
    }

    this.platform = platform;
    this.arch = arch;
  }

  /**
    * @method OS
    * @return NodeJS native OS module
  */
  static OS() {
    return os;
  }

  /**
    * @method isWindows
    * @return true if the current OS is Windows
  */
  isWindows() {
    return this.platform == 'windows';
  }

  /**
    * @method isLinux
    * @return true if the current OS is Linux
  */
  isLinux() {
    return this.platform == 'linux';
  }

  /**
    * @method isMac
    * @return true if the current OS is Mac
  */
  isMac() {
    return this.platform == 'mac';
  }

  /**
    * @method isSolaris
    * @return true if the current OS is Solaris
  */
  isSolaris() {
    return this.platform == 'solaris';
  }

  /**
    * @method isFreeBSD
    * @return true if the current OS is FreeBSD
  */
  isFreeBSD() {
    return this.platform == 'freeBSD';
  }

  /**
    * @method getOSName
    * @return true if the current OS is Windows
  */
  getOSName() {

    switch (this.platform) {
      case 'linux':
        return getLinuxOperationSystemName();
      default:
        return this.platform.concat(' ').concat(this.arch);
    }
  }
}

/**
 * @private
 * @method getLinuxOperationSystemName
 * Attemp to discover what the current linux operation system name. Ex: ubuntu, fedora, openSuse
*/
function getLinuxOperationSystemName() {
  let OSName,
    buffer;

  buffer = execSync('uname -a');

  if (buffer.toString().toLowerCase().indexOf('ubuntu') > -1) {
    OSName = 'ubuntu';
  } else {
    OSName = 'linux';
  }

  //TODO: Include more OS on the validation

  return OSName;
}

export { NodeWOS };
