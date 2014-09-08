module.exports = {
  name: 'Ember CLI Simple Auth Testing',

  included: function(app) {
    this._super.included(app);

    this.app.import(app.bowerDirectory + '/ember-simple-auth/simple-auth-testing.amd.js', {
      type:    'test',
      exports: {
        'simple-auth-testing/test-helpers': ['default'],
        'simple-auth-testing/initializer':  ['default']
      }
    });
  }
}
