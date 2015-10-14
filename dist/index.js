'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _child_process = require('child_process');

/**
 * @class NodeWOS
 * NodeJS utility for OS information
*/

var NodeWOS = (function () {
  function NodeWOS() {
    _classCallCheck(this, NodeWOS);

    var platform = undefined,
        arch = undefined;

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
   * @private
   * @method getLinuxOperationSystemName
   * Attemp to discover what the current linux operation system name. Ex: ubuntu, fedora, openSuse
  */

  /**
    * @method OS
    * @return NodeJS native OS module
  */

  _createClass(NodeWOS, [{
    key: 'isWindows',

    /**
      * @method isWindows
      * @return true if the current OS is Windows
    */
    value: function isWindows() {
      return this.platform == 'windows';
    }

    /**
      * @method isLinux
      * @return true if the current OS is Linux
    */
  }, {
    key: 'isLinux',
    value: function isLinux() {
      return this.platform == 'linux';
    }

    /**
      * @method isMac
      * @return true if the current OS is Mac
    */
  }, {
    key: 'isMac',
    value: function isMac() {
      return this.platform == 'mac';
    }

    /**
      * @method isSolaris
      * @return true if the current OS is Solaris
    */
  }, {
    key: 'isSolaris',
    value: function isSolaris() {
      return this.platform == 'solaris';
    }

    /**
      * @method isFreeBSD
      * @return true if the current OS is FreeBSD
    */
  }, {
    key: 'isFreeBSD',
    value: function isFreeBSD() {
      return this.platform == 'freeBSD';
    }

    /**
      * @method getOSName
      * @return Attemp to discover what the current operation system name
    */
  }, {
    key: 'getOSName',
    value: function getOSName() {

      switch (this.platform) {
        case 'linux':
          return getLinuxOperationSystemName();
        default:
          return this.platform.concat(' ').concat(this.arch);
      }
    }
  }], [{
    key: 'OS',
    value: function OS() {
      return _os2['default'];
    }
  }]);

  return NodeWOS;
})();

function getLinuxOperationSystemName() {
  var OSName = undefined,
      buffer = undefined;

  buffer = (0, _child_process.execSync)('uname -a');

  if (buffer.toString().toLowerCase().indexOf('ubuntu') > -1) {
    OSName = 'ubuntu';
  } else {
    OSName = 'linux';
  }

  //TODO: Include more OS on the validation

  return OSName;
}

exports['default'] = new NodeWOS();
module.exports = exports['default'];
