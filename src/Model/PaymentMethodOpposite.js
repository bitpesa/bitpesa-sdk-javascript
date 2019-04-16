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

import ApiClient from '../ApiClient';
import FieldDescription from './FieldDescription';
import PaymentMethod from './PaymentMethod';

/**
 * The PaymentMethodOpposite model module.
 * @module Model/PaymentMethodOpposite
 * @version 0.2.0
 */
class PaymentMethodOpposite {
    /**
     * Constructs a new <code>PaymentMethodOpposite</code>.
     * @alias module:Model/PaymentMethodOpposite
     * @implements module:Model/PaymentMethod
     */
    constructor() { 
        PaymentMethod.initialize(this);
        PaymentMethodOpposite.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PaymentMethodOpposite</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PaymentMethodOpposite} obj Optional instance to populate.
     * @return {module:Model/PaymentMethodOpposite} The populated <code>PaymentMethodOpposite</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentMethodOpposite();
            PaymentMethod.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('provider')) {
                obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
            }
            if (data.hasOwnProperty('otc_permitted')) {
                obj['otc_permitted'] = ApiClient.convertToType(data['otc_permitted'], 'Boolean');
            }
            if (data.hasOwnProperty('details')) {
                obj['details'] = ApiClient.convertToType(data['details'], ['String']);
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], {'String': FieldDescription});
            }
            if (data.hasOwnProperty('opposites')) {
                obj['opposites'] = ApiClient.convertToType(data['opposites'], [PaymentMethod]);
            }
        }
        return obj;
    }


}

/**
 * Details currency and type of payment.
 * @member {String} type
 */
PaymentMethodOpposite.prototype['type'] = undefined;

/**
 * Identifies the payment provider.
 * @member {String} provider
 */
PaymentMethodOpposite.prototype['provider'] = undefined;

/**
 * Are over the counter transactions permitted?
 * @member {Boolean} otc_permitted
 */
PaymentMethodOpposite.prototype['otc_permitted'] = undefined;

/**
 * Fields required to make the payment depending on type.
 * @member {Array.<String>} details
 */
PaymentMethodOpposite.prototype['details'] = undefined;

/**
 * Boolean revealing whether this is the default payout method. Only present on payout methods
 * @member {Boolean} default
 */
PaymentMethodOpposite.prototype['default'] = undefined;

/**
 * The fields needed for payments with this payment method with details on validation requirements
 * @member {Object.<String, module:Model/FieldDescription>} fields
 */
PaymentMethodOpposite.prototype['fields'] = undefined;

/**
 * List of all providers that can be used in conjunction with the main provider
 * @member {Array.<module:Model/PaymentMethod>} opposites
 */
PaymentMethodOpposite.prototype['opposites'] = undefined;


// Implement PaymentMethod interface:
/**
 * Details currency and type of payment.
 * @member {String} type
 */
PaymentMethod.prototype['type'] = undefined;
/**
 * Identifies the payment provider.
 * @member {String} provider
 */
PaymentMethod.prototype['provider'] = undefined;
/**
 * Are over the counter transactions permitted?
 * @member {Boolean} otc_permitted
 */
PaymentMethod.prototype['otc_permitted'] = undefined;
/**
 * Fields required to make the payment depending on type.
 * @member {Array.<String>} details
 */
PaymentMethod.prototype['details'] = undefined;
/**
 * Boolean revealing whether this is the default payout method. Only present on payout methods
 * @member {Boolean} default
 */
PaymentMethod.prototype['default'] = undefined;
/**
 * The fields needed for payments with this payment method with details on validation requirements
 * @member {Object.<String, module:Model/FieldDescription>} fields
 */
PaymentMethod.prototype['fields'] = undefined;




export default PaymentMethodOpposite;

