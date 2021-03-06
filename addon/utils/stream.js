import Ember from 'ember';

/*
`Ember.__loader` is private, but these specific modules were not exposed when the initial
streamification of Ember's view layer happened.

https://github.com/emberjs/ember.js/pull/9693 is pending to expose them (hopefully in 1.10).
*/
export default Ember.__loader.require('ember-metal/streams/stream')['default'];
export var read = Ember.__loader.require('ember-metal/streams/utils')['read'];
export var readArray = Ember.__loader.require('ember-metal/streams/utils')['readArray'];
export var readHash = Ember.__loader.require('ember-metal/streams/utils')['readHash'];
export var subscribe = Ember.__loader.require('ember-metal/streams/utils')['subscribe'];
