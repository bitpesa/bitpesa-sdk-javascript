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
    instance = new BitpesaSdk.PaymentMethodsApi();
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

  describe('PaymentMethodsApi', function() {
    describe('paymentMethodsIn', function() {
      it('should call paymentMethodsIn successfully', function(done) {
        //uncomment below and update the code to test paymentMethodsIn
        //instance.paymentMethodsIn(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('paymentMethodsOut', function() {
      it('should call paymentMethodsOut successfully', function(done) {
        //uncomment below and update the code to test paymentMethodsOut
        //instance.paymentMethodsOut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
