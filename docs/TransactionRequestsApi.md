# BitpesaSdk.TransactionRequestsApi

All URIs are relative to *https://api-sandbox.bitpesa.co/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmTransactionRequest**](TransactionRequestsApi.md#confirmTransactionRequest) | **POST** /transaction_requests/{Transaction Request ID}/confirm | Confirming a transaction request
[**getTransactionRequest**](TransactionRequestsApi.md#getTransactionRequest) | **GET** /transaction_requests/{Transaction Request ID} | Fetching a transaction request
[**getTransactionRequests**](TransactionRequestsApi.md#getTransactionRequests) | **GET** /transaction_requests | Listing transaction requests
[**postTransactionRequest**](TransactionRequestsApi.md#postTransactionRequest) | **POST** /transaction_requests | Creating a transaction request
[**validateTransactionRequests**](TransactionRequestsApi.md#validateTransactionRequests) | **POST** /transaction_requests/validate | Validates a transaction request payload


<a name="confirmTransactionRequest"></a>
# **confirmTransactionRequest**
> TransactionReqResponse confirmTransactionRequest(transactionRequestID)

Confirming a transaction request

Confirms a new transaction request 

### Example
```javascript
import BitpesaSdk from 'bitpesa-sdk';
let defaultClient = BitpesaSdk.ApiClient.instance;

// Configure API key authorization: AuthorizationKey
let AuthorizationKey = defaultClient.authentications['AuthorizationKey'];
AuthorizationKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationNonce
let AuthorizationNonce = defaultClient.authentications['AuthorizationNonce'];
AuthorizationNonce.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationNonce.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationSecret
let AuthorizationSecret = defaultClient.authentications['AuthorizationSecret'];
AuthorizationSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationSecret.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationSignature
let AuthorizationSignature = defaultClient.authentications['AuthorizationSignature'];
AuthorizationSignature.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationSignature.apiKeyPrefix = 'Token';

let apiInstance = new BitpesaSdk.TransactionRequestsApi();
let transactionRequestID = null; // String | ID of the transaction request to confirm.  Example: `/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670/confirm`
apiInstance.confirmTransactionRequest(transactionRequestID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionRequestID** | [**String**](.md)| ID of the transaction request to confirm.  Example: &#x60;/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670/confirm&#x60; | 

### Return type

[**TransactionReqResponse**](TransactionReqResponse.md)

### Authorization

[AuthorizationKey](../README.md#AuthorizationKey), [AuthorizationNonce](../README.md#AuthorizationNonce), [AuthorizationSecret](../README.md#AuthorizationSecret), [AuthorizationSignature](../README.md#AuthorizationSignature)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTransactionRequest"></a>
# **getTransactionRequest**
> TransactionReqResponse getTransactionRequest(transactionRequestID)

Fetching a transaction request

Returns a single transaction request by the Transaction Request ID

### Example
```javascript
import BitpesaSdk from 'bitpesa-sdk';
let defaultClient = BitpesaSdk.ApiClient.instance;

// Configure API key authorization: AuthorizationKey
let AuthorizationKey = defaultClient.authentications['AuthorizationKey'];
AuthorizationKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationNonce
let AuthorizationNonce = defaultClient.authentications['AuthorizationNonce'];
AuthorizationNonce.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationNonce.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationSecret
let AuthorizationSecret = defaultClient.authentications['AuthorizationSecret'];
AuthorizationSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationSecret.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationSignature
let AuthorizationSignature = defaultClient.authentications['AuthorizationSignature'];
AuthorizationSignature.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationSignature.apiKeyPrefix = 'Token';

let apiInstance = new BitpesaSdk.TransactionRequestsApi();
let transactionRequestID = null; // String | ID of the transaction request to get.  Example: `/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670`
apiInstance.getTransactionRequest(transactionRequestID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionRequestID** | [**String**](.md)| ID of the transaction request to get.  Example: &#x60;/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60; | 

### Return type

[**TransactionReqResponse**](TransactionReqResponse.md)

### Authorization

[AuthorizationKey](../README.md#AuthorizationKey), [AuthorizationNonce](../README.md#AuthorizationNonce), [AuthorizationSecret](../README.md#AuthorizationSecret), [AuthorizationSignature](../README.md#AuthorizationSignature)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTransactionRequests"></a>
# **getTransactionRequests**
> TransactionReqListResponse getTransactionRequests(opts)

Listing transaction requests

Get a list of transaction requests

### Example
```javascript
import BitpesaSdk from 'bitpesa-sdk';
let defaultClient = BitpesaSdk.ApiClient.instance;

// Configure API key authorization: AuthorizationKey
let AuthorizationKey = defaultClient.authentications['AuthorizationKey'];
AuthorizationKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationNonce
let AuthorizationNonce = defaultClient.authentications['AuthorizationNonce'];
AuthorizationNonce.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationNonce.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationSecret
let AuthorizationSecret = defaultClient.authentications['AuthorizationSecret'];
AuthorizationSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationSecret.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationSignature
let AuthorizationSignature = defaultClient.authentications['AuthorizationSignature'];
AuthorizationSignature.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationSignature.apiKeyPrefix = 'Token';

let apiInstance = new BitpesaSdk.TransactionRequestsApi();
let opts = {
  'state': ["null"], // [String] | Returns transaction requests with specified states.  Example: `/v1/transaction_requests?state[]=pending&state[]=modified`
  'currency': ["null"], // [String] | Returns transaction requests with specified input_currency.  Example: `/v1/transaction_requests?state[]=pending&state[]=modified`
  'createdAtFrom': "createdAtFrom_example", // String | Returns transaction requests with specified created_at lower limit.  Example: `/v1/transaction_requests?created_at_from=2018-06-09`
  'createdAtTo': "createdAtTo_example", // String | Returns transaction requests with specified created_at upper limit.  Example: `/v1/transaction_requests?created_at_to=2018-06-08`
  'amountFrom': "amountFrom_example", // String | Returns transaction requests with specified amount lower limit.  Example: `/v1/transaction_requests?currency=NGN&amount_from=2.4319983`
  'amountTo': "amountTo_example" // String | Returns transaction requests with specified amount upper limit.  Example: `/v1/transaction_requests?currency=NGN&amount_to=2.4319985`
};
apiInstance.getTransactionRequests(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **state** | [**[String]**](String.md)| Returns transaction requests with specified states.  Example: &#x60;/v1/transaction_requests?state[]&#x3D;pending&amp;state[]&#x3D;modified&#x60; | [optional] 
 **currency** | [**[String]**](String.md)| Returns transaction requests with specified input_currency.  Example: &#x60;/v1/transaction_requests?state[]&#x3D;pending&amp;state[]&#x3D;modified&#x60; | [optional] 
 **createdAtFrom** | **String**| Returns transaction requests with specified created_at lower limit.  Example: &#x60;/v1/transaction_requests?created_at_from&#x3D;2018-06-09&#x60; | [optional] 
 **createdAtTo** | **String**| Returns transaction requests with specified created_at upper limit.  Example: &#x60;/v1/transaction_requests?created_at_to&#x3D;2018-06-08&#x60; | [optional] 
 **amountFrom** | **String**| Returns transaction requests with specified amount lower limit.  Example: &#x60;/v1/transaction_requests?currency&#x3D;NGN&amp;amount_from&#x3D;2.4319983&#x60; | [optional] 
 **amountTo** | **String**| Returns transaction requests with specified amount upper limit.  Example: &#x60;/v1/transaction_requests?currency&#x3D;NGN&amp;amount_to&#x3D;2.4319985&#x60; | [optional] 

### Return type

[**TransactionReqListResponse**](TransactionReqListResponse.md)

### Authorization

[AuthorizationKey](../README.md#AuthorizationKey), [AuthorizationNonce](../README.md#AuthorizationNonce), [AuthorizationSecret](../README.md#AuthorizationSecret), [AuthorizationSignature](../README.md#AuthorizationSignature)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postTransactionRequest"></a>
# **postTransactionRequest**
> TransactionReqResponse postTransactionRequest(transactionReqRequest)

Creating a transaction request

Creates a new transaction request 

### Example
```javascript
import BitpesaSdk from 'bitpesa-sdk';
let defaultClient = BitpesaSdk.ApiClient.instance;

// Configure API key authorization: AuthorizationKey
let AuthorizationKey = defaultClient.authentications['AuthorizationKey'];
AuthorizationKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationNonce
let AuthorizationNonce = defaultClient.authentications['AuthorizationNonce'];
AuthorizationNonce.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationNonce.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationSecret
let AuthorizationSecret = defaultClient.authentications['AuthorizationSecret'];
AuthorizationSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationSecret.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationSignature
let AuthorizationSignature = defaultClient.authentications['AuthorizationSignature'];
AuthorizationSignature.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationSignature.apiKeyPrefix = 'Token';

let apiInstance = new BitpesaSdk.TransactionRequestsApi();
let transactionReqRequest = new BitpesaSdk.TransactionReqRequest(); // TransactionReqRequest | 
apiInstance.postTransactionRequest(transactionReqRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionReqRequest** | [**TransactionReqRequest**](TransactionReqRequest.md)|  | 

### Return type

[**TransactionReqResponse**](TransactionReqResponse.md)

### Authorization

[AuthorizationKey](../README.md#AuthorizationKey), [AuthorizationNonce](../README.md#AuthorizationNonce), [AuthorizationSecret](../README.md#AuthorizationSecret), [AuthorizationSignature](../README.md#AuthorizationSignature)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validateTransactionRequests"></a>
# **validateTransactionRequests**
> TransactionReqResponse validateTransactionRequests(transactionReqRequest)

Validates a transaction request payload

Validates fields in a transaction request payload and displays invalid or missing fields

### Example
```javascript
import BitpesaSdk from 'bitpesa-sdk';
let defaultClient = BitpesaSdk.ApiClient.instance;

// Configure API key authorization: AuthorizationKey
let AuthorizationKey = defaultClient.authentications['AuthorizationKey'];
AuthorizationKey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationKey.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationNonce
let AuthorizationNonce = defaultClient.authentications['AuthorizationNonce'];
AuthorizationNonce.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationNonce.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationSecret
let AuthorizationSecret = defaultClient.authentications['AuthorizationSecret'];
AuthorizationSecret.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationSecret.apiKeyPrefix = 'Token';

// Configure API key authorization: AuthorizationSignature
let AuthorizationSignature = defaultClient.authentications['AuthorizationSignature'];
AuthorizationSignature.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//AuthorizationSignature.apiKeyPrefix = 'Token';

let apiInstance = new BitpesaSdk.TransactionRequestsApi();
let transactionReqRequest = new BitpesaSdk.TransactionReqRequest(); // TransactionReqRequest | 
apiInstance.validateTransactionRequests(transactionReqRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionReqRequest** | [**TransactionReqRequest**](TransactionReqRequest.md)|  | 

### Return type

[**TransactionReqResponse**](TransactionReqResponse.md)

### Authorization

[AuthorizationKey](../README.md#AuthorizationKey), [AuthorizationNonce](../README.md#AuthorizationNonce), [AuthorizationSecret](../README.md#AuthorizationSecret), [AuthorizationSignature](../README.md#AuthorizationSignature)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

