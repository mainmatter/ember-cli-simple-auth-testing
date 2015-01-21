#  Ember Simple Auth Testing

This is an npm package that contains the Ember Simple Auth Testing extension
library packaged as an [Ember CLI](https://github.com/stefanpenner/ember-cli)
Addon.

## Installation

**Ember Simple Auth testing requires at least Ember CLI 0.4.7.**

To install simply run

```
ember install:addon ember-cli-simple-auth-testing
```

in your Ember CLI project's root.

If you're using Ember CLI 0.1.4 or older, run

```
npm install --save-dev ember-cli-simple-auth-testing
ember generate ember-cli-simple-auth-testing
```

You also need to import the helpers - preferrably in the app's
`tests/helpers/start-app.js` file:

```js
…

import 'simple-auth-testing/test-helpers';

export default function startApp(attrs) {
  …
```

## Configuration

When using the testing helpers also make sure to use the ephemeral session
store for the `test` environment as otherwise the session will be persisted and
tests might influence each other.

```js
//config/environment.js
if (environment === 'test') {
  ENV['simple-auth'] = {
    store: 'simple-auth-session-store:ephemeral'
  }
}
```

For the actual Ember Simple Auth repository see
https://github.com/simplabs/ember-simple-auth
