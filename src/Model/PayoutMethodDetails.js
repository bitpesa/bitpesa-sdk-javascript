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
import PayoutMethodBankAccountTypeEnum from './PayoutMethodBankAccountTypeEnum';
import PayoutMethodDetailsBalance from './PayoutMethodDetailsBalance';
import PayoutMethodDetailsGHSBank from './PayoutMethodDetailsGHSBank';
import PayoutMethodDetailsIBAN from './PayoutMethodDetailsIBAN';
import PayoutMethodDetailsMADCash from './PayoutMethodDetailsMADCash';
import PayoutMethodDetailsMobile from './PayoutMethodDetailsMobile';
import PayoutMethodDetailsNGNBank from './PayoutMethodDetailsNGNBank';
import PayoutMethodDetailsXOFMobile from './PayoutMethodDetailsXOFMobile';
import PayoutMethodGenderEnum from './PayoutMethodGenderEnum';
import PayoutMethodIdentityCardTypeEnum from './PayoutMethodIdentityCardTypeEnum';
import PayoutMethodMobileProviderEnum from './PayoutMethodMobileProviderEnum';

/**
 * The PayoutMethodDetails model module.
 * @module Model/PayoutMethodDetails
 * @version 1.0.0
 */
class PayoutMethodDetails {
    /**
     * Constructs a new <code>PayoutMethodDetails</code>.
     * @alias module:Model/PayoutMethodDetails
     * @implements module:Model/PayoutMethodDetailsNGNBank
     * @implements module:Model/PayoutMethodDetailsMobile
     * @implements module:Model/PayoutMethodDetailsXOFMobile
     * @implements module:Model/PayoutMethodDetailsGHSBank
     * @implements module:Model/PayoutMethodDetailsIBAN
     * @implements module:Model/PayoutMethodDetailsMADCash
     * @implements module:Model/PayoutMethodDetailsBalance
     * @param firstName {} 
     * @param lastName {} 
     * @param bankCode {} 
     * @param bankAccount {} 
     * @param bankAccountType {} 
     * @param phoneNumber {} 
     * @param mobileProvider {} 
     * @param bankName {} 
     * @param iban {} 
     * @param senderIdentityCardType {} 
     * @param senderIdentityCardId {} 
     * @param senderCityOfBirth {} 
     * @param senderCountryOfBirth {} 
     * @param senderGender {} 
     */
    constructor(firstName, lastName, bankCode, bankAccount, bankAccountType, phoneNumber, mobileProvider, bankName, iban, senderIdentityCardType, senderIdentityCardId, senderCityOfBirth, senderCountryOfBirth, senderGender) { 
        PayoutMethodDetailsNGNBank.initialize(this, firstName, lastName, bankCode, bankAccount, bankAccountType);PayoutMethodDetailsMobile.initialize(this, firstName, lastName, phoneNumber);PayoutMethodDetailsXOFMobile.initialize(this, firstName, lastName, phoneNumber, mobileProvider);PayoutMethodDetailsGHSBank.initialize(this, firstName, lastName, bankCode, bankAccount);PayoutMethodDetailsIBAN.initialize(this, firstName, lastName, bankName, iban);PayoutMethodDetailsMADCash.initialize(this, firstName, lastName, phoneNumber, senderIdentityCardType, senderIdentityCardId, senderCityOfBirth, senderCountryOfBirth, senderGender);PayoutMethodDetailsBalance.initialize(this);
        PayoutMethodDetails.initialize(this, firstName, lastName, bankCode, bankAccount, bankAccountType, phoneNumber, mobileProvider, bankName, iban, senderIdentityCardType, senderIdentityCardId, senderCityOfBirth, senderCountryOfBirth, senderGender);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, firstName, lastName, bankCode, bankAccount, bankAccountType, phoneNumber, mobileProvider, bankName, iban, senderIdentityCardType, senderIdentityCardId, senderCityOfBirth, senderCountryOfBirth, senderGender) { 
    }

    /**
     * Constructs a <code>PayoutMethodDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/PayoutMethodDetails} obj Optional instance to populate.
     * @return {module:Model/PayoutMethodDetails} The populated <code>PayoutMethodDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PayoutMethodDetails();
            PayoutMethodDetailsNGNBank.constructFromObject(data, obj);
            PayoutMethodDetailsMobile.constructFromObject(data, obj);
            PayoutMethodDetailsXOFMobile.constructFromObject(data, obj);
            PayoutMethodDetailsGHSBank.constructFromObject(data, obj);
            PayoutMethodDetailsIBAN.constructFromObject(data, obj);
            PayoutMethodDetailsMADCash.constructFromObject(data, obj);
            PayoutMethodDetailsBalance.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement PayoutMethodDetailsNGNBank interface:
/**
 * @member {String} first_name
 */
PayoutMethodDetailsNGNBank.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */
PayoutMethodDetailsNGNBank.prototype['last_name'] = undefined;
/**
 * @member {String} bank_code
 */
PayoutMethodDetailsNGNBank.prototype['bank_code'] = undefined;
/**
 * @member {String} bank_account
 */
PayoutMethodDetailsNGNBank.prototype['bank_account'] = undefined;
/**
 * @member {module:Model/PayoutMethodBankAccountTypeEnum} bank_account_type
 */
PayoutMethodDetailsNGNBank.prototype['bank_account_type'] = undefined;
// Implement PayoutMethodDetailsMobile interface:
/**
 * @member {String} first_name
 */
PayoutMethodDetailsMobile.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */
PayoutMethodDetailsMobile.prototype['last_name'] = undefined;
/**
 * @member {String} phone_number
 */
PayoutMethodDetailsMobile.prototype['phone_number'] = undefined;
// Implement PayoutMethodDetailsXOFMobile interface:
/**
 * @member {String} first_name
 */
PayoutMethodDetailsXOFMobile.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */
PayoutMethodDetailsXOFMobile.prototype['last_name'] = undefined;
/**
 * @member {String} phone_number
 */
PayoutMethodDetailsXOFMobile.prototype['phone_number'] = undefined;
/**
 * @member {module:Model/PayoutMethodMobileProviderEnum} mobile_provider
 */
PayoutMethodDetailsXOFMobile.prototype['mobile_provider'] = undefined;
// Implement PayoutMethodDetailsGHSBank interface:
/**
 * @member {String} first_name
 */
PayoutMethodDetailsGHSBank.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */
PayoutMethodDetailsGHSBank.prototype['last_name'] = undefined;
/**
 * @member {String} bank_code
 */
PayoutMethodDetailsGHSBank.prototype['bank_code'] = undefined;
/**
 * @member {String} bank_account
 */
PayoutMethodDetailsGHSBank.prototype['bank_account'] = undefined;
// Implement PayoutMethodDetailsIBAN interface:
/**
 * @member {String} first_name
 */
PayoutMethodDetailsIBAN.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */
PayoutMethodDetailsIBAN.prototype['last_name'] = undefined;
/**
 * @member {String} bank_name
 */
PayoutMethodDetailsIBAN.prototype['bank_name'] = undefined;
/**
 * @member {String} iban
 */
PayoutMethodDetailsIBAN.prototype['iban'] = undefined;
/**
 * @member {String} bic
 */
PayoutMethodDetailsIBAN.prototype['bic'] = undefined;
// Implement PayoutMethodDetailsMADCash interface:
/**
 * @member {String} first_name
 */
PayoutMethodDetailsMADCash.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */
PayoutMethodDetailsMADCash.prototype['last_name'] = undefined;
/**
 * @member {String} phone_number
 */
PayoutMethodDetailsMADCash.prototype['phone_number'] = undefined;
/**
 * @member {module:Model/PayoutMethodIdentityCardTypeEnum} sender_identity_card_type
 */
PayoutMethodDetailsMADCash.prototype['sender_identity_card_type'] = undefined;
/**
 * @member {String} sender_identity_card_id
 */
PayoutMethodDetailsMADCash.prototype['sender_identity_card_id'] = undefined;
/**
 * @member {String} sender_city_of_birth
 */
PayoutMethodDetailsMADCash.prototype['sender_city_of_birth'] = undefined;
/**
 * @member {String} sender_country_of_birth
 */
PayoutMethodDetailsMADCash.prototype['sender_country_of_birth'] = undefined;
/**
 * @member {module:Model/PayoutMethodGenderEnum} sender_gender
 */
PayoutMethodDetailsMADCash.prototype['sender_gender'] = undefined;
/**
 * @member {String} reason
 */
PayoutMethodDetailsMADCash.prototype['reason'] = undefined;
/**
 * @member {module:Model/PayoutMethodIdentityCardTypeEnum} identity_card_type
 */
PayoutMethodDetailsMADCash.prototype['identity_card_type'] = undefined;
/**
 * @member {String} identity_card_id
 */
PayoutMethodDetailsMADCash.prototype['identity_card_id'] = undefined;
// Implement PayoutMethodDetailsBalance interface:
/**
 * @member {String} reference
 */
PayoutMethodDetailsBalance.prototype['reference'] = undefined;




export default PayoutMethodDetails;

