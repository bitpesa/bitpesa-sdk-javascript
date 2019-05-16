# TransferzeroSdk.AccountDebitsApi

All URIs are relative to *https://api-sandbox.transferzero.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountsDebit**](AccountDebitsApi.md#getAccountsDebit) | **GET** /accounts/debits/{Account Debit ID} | Fetching an account debit
[**getAccountsDebits**](AccountDebitsApi.md#getAccountsDebits) | **GET** /accounts/debits | Listing Accounts debits
[**postAccountsDebits**](AccountDebitsApi.md#postAccountsDebits) | **POST** /accounts/debits | Creating an account debit


<a name="getAccountsDebit"></a>
# **getAccountsDebit**
> DebitResponse getAccountsDebit(accountDebitID)

Fetching an account debit

Returns a single account debit by the account debit ID

### Example
```javascript
import { AccountDebitsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';

let apiInstance = new AccountDebitsApi(apiClient);

apiInstance.getAccountsDebit(accountDebitID).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling AccountDebitsApi#getAccountsDebit");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountDebitID** | [**String**](.md)| ID of the account debit to get.  Example: &#x60;/v1/accounts/debits/9170c890-1a45-46bd-9b79-3deeb8b4ff3d&#x60; | 

### Return type

[**DebitResponse**](DebitResponse.md)

### Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.transferzero.com/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAccountsDebits"></a>
# **getAccountsDebits**
> DebitListResponse getAccountsDebits(opts)

Listing Accounts debits

Get a list of accounts debits

### Example
```javascript
import { AccountDebitsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';

let apiInstance = new AccountDebitsApi(apiClient);

let opts = { 
  'page': 1 // Number | The page number to request (defaults to 1)
  'per': 10 // Number | The number of results to load per page (defaults to 10)
};
apiInstance.getAccountsDebits(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling AccountDebitsApi#getAccountsDebits");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| The page number to request (defaults to 1) | [optional] 
 **per** | **Number**| The number of results to load per page (defaults to 10) | [optional] 

### Return type

[**DebitListResponse**](DebitListResponse.md)

### Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.transferzero.com/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';
```

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postAccountsDebits"></a>
# **postAccountsDebits**
> DebitListResponse postAccountsDebits(debitRequestWrapper)

Creating an account debit

Creates a new account debit finding transaction through the internal balance  To successfully fund a transaction - - The currency needs to be the same as the input_currency on the transaction - The amount has to be the same as the input_amount on the transaction - The to_id is the id of the transaction - You need to have enough balance of the appropriate currency inside your wallet  Once the transaction is funded, we will immediately start trying to pay out the recipient(s).  It is also possible to create multiple account debits by supplying an array of debit objects 

### Example
```javascript
import { AccountDebitsApi } from 'transferzero-sdk';

// Configure API key authorization
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';

let apiInstance = new AccountDebitsApi(apiClient);

apiInstance.postAccountsDebits(debitRequestWrapper).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  if (error.isValidationError) {
    let result = error.getResponseObject();
    console.log(result);
    console.error("WARN: Validation error occurred when calling the endpoint");
  } else {
    console.error("Exception when calling AccountDebitsApi#postAccountsDebits");
    throw error;
  }
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **debitRequestWrapper** | [**DebitRequestWrapper**](DebitRequestWrapper.md)|  | 

### Return type

[**DebitListResponse**](DebitListResponse.md)

### Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.transferzero.com/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.transferzero.com/v1';
```

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

