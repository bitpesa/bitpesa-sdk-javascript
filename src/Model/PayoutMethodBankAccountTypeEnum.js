/**
 * TransferZero API
 * Reference documentation for the TransferZero API V1
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
/**
* Enum class PayoutMethodBankAccountTypeEnum.
* @enum {}
* @readonly
*/
export default class PayoutMethodBankAccountTypeEnum {
    
        /**
         * value: "10"
         * @const
         */
        "10" = "10";

    
        /**
         * value: "20"
         * @const
         */
        "20" = "20";

    

    /**
    * Returns a <code>PayoutMethodBankAccountTypeEnum</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:Model/PayoutMethodBankAccountTypeEnum} The enum <code>PayoutMethodBankAccountTypeEnum</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

