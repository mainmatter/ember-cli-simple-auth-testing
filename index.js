var path = require('path');
var fs   = require('fs');

function EmberCLISimpleAuthTesting(project) {
  this.project = project;
  this.name    = 'Ember CLI Simple Auth Testing';
}

function unwatchedTree(dir) {
  return {
    read:    function() { return dir; },
    cleanup: function() { }
  };
}

EmberCLISimpleAuthTesting.prototype.treeFor = function included(name) {
  var treePath = path.join('node_modules/ember-cli-simple-auth-testing', name + '-addon');

  if (this.app.env !== 'production' && fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLISimpleAuthTesting.prototype.included = function included(app) {
  this.app = app;

  if (this.app.env !== 'production') {
    this.app.import('vendor/ember-simple-auth/simple-auth-testing.amd.js', {
      exports: {
        'simple-auth-testing/test-helpers': ['default'],
        'simple-auth-testing/initializer':  ['default']
      }
    });
  }
};

module.exports = EmberCLISimpleAuthTesting
;
