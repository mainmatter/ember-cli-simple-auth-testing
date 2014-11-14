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
    this.insertIntoFile('tests/helpers/start-app.js',
      "import 'simple-auth-testing/test-helpers';" + EOL + EOL
      { before: 'export default function startApp(attrs) {' + EOL }
    );

    return this.addBowerPackageToProject('ember-simple-auth', '0.7.1');
  }
};
