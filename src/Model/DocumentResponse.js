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
import Document from './Document';

/**
 * The DocumentResponse model module.
 * @module Model/DocumentResponse
 * @version 0.1.0
 */
class DocumentResponse {
    /**
     * Constructs a new <code>DocumentResponse</code>.
     * @alias module:Model/DocumentResponse
     */
    constructor() { 
        
        DocumentResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocumentResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/DocumentResponse} obj Optional instance to populate.
     * @return {module:Model/DocumentResponse} The populated <code>DocumentResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = Document.constructFromObject(data['object']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/Document} object
 */
DocumentResponse.prototype['object'] = undefined;






export default DocumentResponse;

