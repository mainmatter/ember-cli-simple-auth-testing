var path = require('path');
var fs   = require('fs');

module.exports = {
  name: 'Ember CLI Simple Auth Testing',

  treeFor: function(name) {
    if(!this.app.tests) {
      return;
    }

    var treePath = path.join(__dirname, name);
    if (fs.existsSync(treePath)) {
      return this.treeGenerator(treePath);
    }
  },

  included: function(app) {
    if (app.tests) {
      app.import(app.bowerDirectory + '/ember-simple-auth/simple-auth-testing.amd.js', {
        exports: {
          'simple-auth-testing/test-helpers': ['default'],
          'simple-auth-testing/initializer':  ['default']
        }
      });
    }
  }
}
