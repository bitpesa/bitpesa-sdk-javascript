/**
 * BitPesa API
 * Reference documentation for the BitPesa API V1
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BitpesaSdk);
  }
}(this, function(expect, BitpesaSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BitpesaSdk.DocumentResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DocumentResponse', function() {
    it('should create an instance of DocumentResponse', function() {
      // uncomment below and update the code to test DocumentResponse
      //var instane = new BitpesaSdk.DocumentResponse();
      //expect(instance).to.be.a(BitpesaSdk.DocumentResponse);
    });

    it('should have the property _object (base name: "object")', function() {
      // uncomment below and update the code to test the property _object
      //var instane = new BitpesaSdk.DocumentResponse();
      //expect(instance).to.be();
    });

  });

}));
