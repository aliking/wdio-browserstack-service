var Browserstack = require('browserstack-local');

var BrowserstackLauncherService = function BrowserstackLauncherService () {};

BrowserstackLauncherService.prototype.onPrepare = function onPrepare (config) {
    var this$1 = this;

  if (!config.browserstackLocal) {
    return;
  }
  var opts = Object.assign({}, {key: config.key,
    forcelocal: true,
    onlyAutomate: true},
    config.browserstackOpts);
  this.browserstackLocal = new Browserstack.Local();

  return new Promise(function (resolve) {
    this$1.browserstackLocal.start(opts, function () { return resolve(); });
  });
};

BrowserstackLauncherService.prototype.onComplete = function onComplete () {
    var this$1 = this;

  if (!this.browserstackLocal) {
    return;
  }
  return new Promise(function (resolve) {
    this$1.browserstackLocal.stop(function () { return resolve(); });
  });
};

module.exports = BrowserstackLauncherService;
