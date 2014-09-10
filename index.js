var path = require('path');
var fs   = require('fs');

function unwatchedTree(dir){
  return {
    read: function() { return dir; }
  };
}

module.exports = {
  name: 'Ember CLI Simple Auth Testing',

  treeFor: function(name) {
    if(!this.app.tests) {
      return;
    }

    var treePath = path.join(__dirname, name);
    if (fs.existsSync(treePath)) {
      return unwatchedTree(treePath);
    }
  },

  included: function(app) {
    this._super.included(app);

    if (app.tests) {
      this.app.import(app.bowerDirectory + '/ember-simple-auth/simple-auth-testing.amd.js', {
        exports: {
          'simple-auth-testing/test-helpers': ['default'],
          'simple-auth-testing/initializer':  ['default']
        }
      });
    }
  }
}
