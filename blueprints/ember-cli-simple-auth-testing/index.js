var EOL = require('os').EOL;

module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    this.insertIntoFile('tests/.jshintrc',
      '    "authenticateSession",' + EOL +
      '    "invalidateSession",',
      { after: '  "predef": [' + EOL }
    );

    return this.addBowerPackageToProject('ember-simple-auth', '0.7.2');
  }
};
