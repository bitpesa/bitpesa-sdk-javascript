# bitpesa-sdk

BitpesaSdk - JavaScript client for bitpesa-sdk
Reference documentation for the BitPesa API V1

For more information, please visit:

* [API Documentation](https://github.com/bitpesa/api-documentation)
  * [Onboarding guide](https://github.com/bitpesa/api-documentation/blob/master/quick-integration.md)
  * [Transaction flow](https://github.com/bitpesa/api-documentation/blob/master/transaction-flow.md)
  * [Additional features](https://github.com/bitpesa/api-documentation/blob/master/additional-features.md)
* [API Specification](https://api.bitpesa.co/documentation)

*Automatically generated by the [OpenAPI Generator](https://openapi-generator.tech)*

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Install the API client library as a dependency in your Node project via:

```shell
npm install bitpesa-sdk --save
```

## Getting Started

Please follow the [installation](#installation) instruction.

You can find examples in the [examples](https://github.com/bitpesa/bitpesa-sdk-javascript/tree/master/examples) directory on the features required by the [Onboarding documentation](https://github.com/bitpesa/api-documentation/blob/master/quick-integration.md)

## Webhooks

To parse webhooks you can use the following snippet:

```js
const webhookContent = '{ (...) }'; // The string received through the webhook callback url

const webhook = apiClient.parseResponseString(webhookContent, Webhook);
if (webhook.event.startsWith('transaction')) {
  const transactionWebhook = apiClient.parseResponseString(
    webhookContent,
    TransactionWebhook
  );
  console.log(transactionWebhook);
} else if (webhook.event.startsWith('recipient')) {
  const recipientWebhook = apiClient.parseResponseString(
    webhookContent,
    RecipientWebhook
  );
  console.log(recipientWebhook);
} else if (webhook.event.startsWith('payout_method')) {
  const payoutMethodWebhook = apiClient.parseResponseString(
    webhookContent,
    PayoutMethodWebhook
  );
  console.log(payoutMethodWebhook);
} else if (webhook.event.startsWith('sender')) {
  const senderWebhook = apiClient.parseResponseString(
    webhookContent,
    SenderWebhook
  );
  console.log(senderWebhook);
} else if (webhook.event.startsWith('document')) {
  const documentWebhook = apiClient.parseResponseString(
    webhookContent,
    DocumentWebhook
  );
  console.log(documentWebhook);
}
```

## Documentation for API Endpoints

All URIs are relative to *https://api-sandbox.bitpesa.co/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*BitpesaSdk.APILogsApi* | [**getApiLog**](docs/APILogsApi.md#getApiLog) | **GET** /api_logs/{API Log ID} | Fetch an individual API log
*BitpesaSdk.APILogsApi* | [**getApiLogs**](docs/APILogsApi.md#getApiLogs) | **GET** /api_logs | Fetch a list of API logs
*BitpesaSdk.AccountDebitsApi* | [**getAccountsDebit**](docs/AccountDebitsApi.md#getAccountsDebit) | **GET** /accounts/debits/{Account Debit ID} | Fetching an account debit
*BitpesaSdk.AccountDebitsApi* | [**getAccountsDebits**](docs/AccountDebitsApi.md#getAccountsDebits) | **GET** /accounts/debits | Listing Accounts debits
*BitpesaSdk.AccountDebitsApi* | [**postAccountsDebits**](docs/AccountDebitsApi.md#postAccountsDebits) | **POST** /accounts/debits | Creating an account debit
*BitpesaSdk.AccountValidationApi* | [**postAccountValidations**](docs/AccountValidationApi.md#postAccountValidations) | **POST** /account_validations | Validates the existence of a bank account
*BitpesaSdk.AccountsApi* | [**getAccount**](docs/AccountsApi.md#getAccount) | **GET** /accounts/{Currency} | Fetches account balance for specified currrency
*BitpesaSdk.AccountsApi* | [**getAccounts**](docs/AccountsApi.md#getAccounts) | **GET** /accounts | Fetches account balances for all currencies
*BitpesaSdk.CurrencyInfoApi* | [**infoCurrencies**](docs/CurrencyInfoApi.md#infoCurrencies) | **GET** /info/currencies | Getting a list of possible requested currencies
*BitpesaSdk.CurrencyInfoApi* | [**infoCurrenciesIn**](docs/CurrencyInfoApi.md#infoCurrenciesIn) | **GET** /info/currencies/in | Getting a list of possible input currencies
*BitpesaSdk.CurrencyInfoApi* | [**infoCurrenciesOut**](docs/CurrencyInfoApi.md#infoCurrenciesOut) | **GET** /info/currencies/out | Getting a list of possible output currencies
*BitpesaSdk.DocumentsApi* | [**getDocument**](docs/DocumentsApi.md#getDocument) | **GET** /documents/{Document ID} | Fetching a document
*BitpesaSdk.DocumentsApi* | [**getDocuments**](docs/DocumentsApi.md#getDocuments) | **GET** /documents | Getting a list of documents
*BitpesaSdk.DocumentsApi* | [**postDocuments**](docs/DocumentsApi.md#postDocuments) | **POST** /documents | Creating a document
*BitpesaSdk.LogsApi* | [**getWebhookLog**](docs/LogsApi.md#getWebhookLog) | **GET** /logs/{Webhook Log ID} | Fetch an individual webhook log
*BitpesaSdk.LogsApi* | [**getWebhookLogs**](docs/LogsApi.md#getWebhookLogs) | **GET** /logs/webhooks | Fetch a list of webhook logs
*BitpesaSdk.PaymentMethodsApi* | [**paymentMethodsIn**](docs/PaymentMethodsApi.md#paymentMethodsIn) | **GET** /info/payment_methods/in | This method returns possible payin methods.
*BitpesaSdk.PaymentMethodsApi* | [**paymentMethodsOut**](docs/PaymentMethodsApi.md#paymentMethodsOut) | **GET** /info/payment_methods/out | This method returns possible payout methods.
*BitpesaSdk.PayoutMethodsApi* | [**deletePayoutMethod**](docs/PayoutMethodsApi.md#deletePayoutMethod) | **DELETE** /payout_methods/{Payout Method ID} | Deleting a payout method
*BitpesaSdk.PayoutMethodsApi* | [**getPayoutMethod**](docs/PayoutMethodsApi.md#getPayoutMethod) | **GET** /payout_methods/{Payout Method ID} | Fetching a payout method
*BitpesaSdk.PayoutMethodsApi* | [**getPayoutMethods**](docs/PayoutMethodsApi.md#getPayoutMethods) | **GET** /payout_methods | Listing payout methods
*BitpesaSdk.PayoutMethodsApi* | [**patchPayoutMethod**](docs/PayoutMethodsApi.md#patchPayoutMethod) | **PATCH** /payout_methods/{Payout Method ID} | Updating a payout method
*BitpesaSdk.PayoutMethodsApi* | [**postPayoutMethods**](docs/PayoutMethodsApi.md#postPayoutMethods) | **POST** /payout_methods | Creating a payout method
*BitpesaSdk.RecipientsApi* | [**deleteRecipient**](docs/RecipientsApi.md#deleteRecipient) | **DELETE** /recipients/{Recipient ID} | Cancelling a recipient
*BitpesaSdk.RecipientsApi* | [**getRecipients**](docs/RecipientsApi.md#getRecipients) | **GET** /recipients | Getting a list of recipients with filtering
*BitpesaSdk.RecipientsApi* | [**patchRecipient**](docs/RecipientsApi.md#patchRecipient) | **PATCH** /recipients/{Recipient ID} | Updating a recipient
*BitpesaSdk.SendersApi* | [**deleteSender**](docs/SendersApi.md#deleteSender) | **DELETE** /senders/{Sender ID} | Deleting a sender
*BitpesaSdk.SendersApi* | [**getSender**](docs/SendersApi.md#getSender) | **GET** /senders/{Sender ID} | Fetching a sender
*BitpesaSdk.SendersApi* | [**getSenders**](docs/SendersApi.md#getSenders) | **GET** /senders | Listing senders
*BitpesaSdk.SendersApi* | [**patchSender**](docs/SendersApi.md#patchSender) | **PATCH** /senders/{Sender ID} | Updating a sender
*BitpesaSdk.SendersApi* | [**postSenders**](docs/SendersApi.md#postSenders) | **POST** /senders | Creating a sender
*BitpesaSdk.TransactionsApi* | [**calculateTransactions**](docs/TransactionsApi.md#calculateTransactions) | **POST** /transactions/calculate | Calculates transaction amounts for a transaction payload
*BitpesaSdk.TransactionsApi* | [**getTransaction**](docs/TransactionsApi.md#getTransaction) | **GET** /transactions/{Transaction ID} | Fetch a single transaction
*BitpesaSdk.TransactionsApi* | [**getTransactions**](docs/TransactionsApi.md#getTransactions) | **GET** /transactions | Get a list of transactions
*BitpesaSdk.TransactionsApi* | [**payinTransaction**](docs/TransactionsApi.md#payinTransaction) | **POST** /transactions/{Transaction ID}/payin | Creates a fake payin for transaction
*BitpesaSdk.TransactionsApi* | [**payoutTransaction**](docs/TransactionsApi.md#payoutTransaction) | **POST** /transactions/{Transaction ID}/payout | Creates a fake payout for transaction
*BitpesaSdk.TransactionsApi* | [**postTransactions**](docs/TransactionsApi.md#postTransactions) | **POST** /transactions | Creates a new transaction
*BitpesaSdk.TransactionsApi* | [**validateTransactions**](docs/TransactionsApi.md#validateTransactions) | **POST** /transactions/validate | Validates a transaction payload
*BitpesaSdk.WebhooksApi* | [**deleteWebhook**](docs/WebhooksApi.md#deleteWebhook) | **DELETE** /webhooks/{Webhook ID} | Unsubscribing from a webhook
*BitpesaSdk.WebhooksApi* | [**getWebhook**](docs/WebhooksApi.md#getWebhook) | **GET** /webhooks/{Webhook ID} | Find a webhook&#39;s details
*BitpesaSdk.WebhooksApi* | [**getWebhookEvents**](docs/WebhooksApi.md#getWebhookEvents) | **GET** /webhooks/events | Find possible webhook events
*BitpesaSdk.WebhooksApi* | [**getWebhooks**](docs/WebhooksApi.md#getWebhooks) | **GET** /webhooks | Listing webhooks
*BitpesaSdk.WebhooksApi* | [**postWebhooks**](docs/WebhooksApi.md#postWebhooks) | **POST** /webhooks | Creating a webhook


## Documentation for Models

 - [BitpesaSdk.Account](docs/Account.md)
 - [BitpesaSdk.AccountListResponse](docs/AccountListResponse.md)
 - [BitpesaSdk.AccountMeta](docs/AccountMeta.md)
 - [BitpesaSdk.AccountResponse](docs/AccountResponse.md)
 - [BitpesaSdk.AccountValidationError](docs/AccountValidationError.md)
 - [BitpesaSdk.AccountValidationRequest](docs/AccountValidationRequest.md)
 - [BitpesaSdk.AccountValidationResponse](docs/AccountValidationResponse.md)
 - [BitpesaSdk.AccountValidationResult](docs/AccountValidationResult.md)
 - [BitpesaSdk.ApiLog](docs/ApiLog.md)
 - [BitpesaSdk.ApiLogListResponse](docs/ApiLogListResponse.md)
 - [BitpesaSdk.ApiLogResponse](docs/ApiLogResponse.md)
 - [BitpesaSdk.Currency](docs/Currency.md)
 - [BitpesaSdk.CurrencyExchange](docs/CurrencyExchange.md)
 - [BitpesaSdk.CurrencyExchangeListResponse](docs/CurrencyExchangeListResponse.md)
 - [BitpesaSdk.CurrencyListResponse](docs/CurrencyListResponse.md)
 - [BitpesaSdk.CurrencyOpposite](docs/CurrencyOpposite.md)
 - [BitpesaSdk.Debit](docs/Debit.md)
 - [BitpesaSdk.DebitListRequest](docs/DebitListRequest.md)
 - [BitpesaSdk.DebitListResponse](docs/DebitListResponse.md)
 - [BitpesaSdk.DebitRequest](docs/DebitRequest.md)
 - [BitpesaSdk.DebitRequestWrapper](docs/DebitRequestWrapper.md)
 - [BitpesaSdk.DebitResponse](docs/DebitResponse.md)
 - [BitpesaSdk.Document](docs/Document.md)
 - [BitpesaSdk.DocumentListResponse](docs/DocumentListResponse.md)
 - [BitpesaSdk.DocumentRequest](docs/DocumentRequest.md)
 - [BitpesaSdk.DocumentResponse](docs/DocumentResponse.md)
 - [BitpesaSdk.DocumentWebhook](docs/DocumentWebhook.md)
 - [BitpesaSdk.ErrorStatus](docs/ErrorStatus.md)
 - [BitpesaSdk.FieldDescription](docs/FieldDescription.md)
 - [BitpesaSdk.FieldSelectValidation](docs/FieldSelectValidation.md)
 - [BitpesaSdk.FieldValidation](docs/FieldValidation.md)
 - [BitpesaSdk.Pagination](docs/Pagination.md)
 - [BitpesaSdk.PaginationMeta](docs/PaginationMeta.md)
 - [BitpesaSdk.PayinMethod](docs/PayinMethod.md)
 - [BitpesaSdk.PayinMethodDetails](docs/PayinMethodDetails.md)
 - [BitpesaSdk.PayinMethodDetailsMobile](docs/PayinMethodDetailsMobile.md)
 - [BitpesaSdk.PayinMethodDetailsNGNBank](docs/PayinMethodDetailsNGNBank.md)
 - [BitpesaSdk.PayinMethodRequest](docs/PayinMethodRequest.md)
 - [BitpesaSdk.PaymentMethod](docs/PaymentMethod.md)
 - [BitpesaSdk.PaymentMethodListResponse](docs/PaymentMethodListResponse.md)
 - [BitpesaSdk.PaymentMethodOpposite](docs/PaymentMethodOpposite.md)
 - [BitpesaSdk.PayoutMethod](docs/PayoutMethod.md)
 - [BitpesaSdk.PayoutMethodBankAccountTypeEnum](docs/PayoutMethodBankAccountTypeEnum.md)
 - [BitpesaSdk.PayoutMethodDetails](docs/PayoutMethodDetails.md)
 - [BitpesaSdk.PayoutMethodDetailsBalance](docs/PayoutMethodDetailsBalance.md)
 - [BitpesaSdk.PayoutMethodDetailsGHSBank](docs/PayoutMethodDetailsGHSBank.md)
 - [BitpesaSdk.PayoutMethodDetailsIBAN](docs/PayoutMethodDetailsIBAN.md)
 - [BitpesaSdk.PayoutMethodDetailsMADCash](docs/PayoutMethodDetailsMADCash.md)
 - [BitpesaSdk.PayoutMethodDetailsMobile](docs/PayoutMethodDetailsMobile.md)
 - [BitpesaSdk.PayoutMethodDetailsNGNBank](docs/PayoutMethodDetailsNGNBank.md)
 - [BitpesaSdk.PayoutMethodDetailsXOFMobile](docs/PayoutMethodDetailsXOFMobile.md)
 - [BitpesaSdk.PayoutMethodGenderEnum](docs/PayoutMethodGenderEnum.md)
 - [BitpesaSdk.PayoutMethodIdentityCardTypeEnum](docs/PayoutMethodIdentityCardTypeEnum.md)
 - [BitpesaSdk.PayoutMethodListResponse](docs/PayoutMethodListResponse.md)
 - [BitpesaSdk.PayoutMethodMobileProviderEnum](docs/PayoutMethodMobileProviderEnum.md)
 - [BitpesaSdk.PayoutMethodRequest](docs/PayoutMethodRequest.md)
 - [BitpesaSdk.PayoutMethodResponse](docs/PayoutMethodResponse.md)
 - [BitpesaSdk.PayoutMethodWebhook](docs/PayoutMethodWebhook.md)
 - [BitpesaSdk.Recipient](docs/Recipient.md)
 - [BitpesaSdk.RecipientListResponse](docs/RecipientListResponse.md)
 - [BitpesaSdk.RecipientRequest](docs/RecipientRequest.md)
 - [BitpesaSdk.RecipientResponse](docs/RecipientResponse.md)
 - [BitpesaSdk.RecipientState](docs/RecipientState.md)
 - [BitpesaSdk.RecipientWebhook](docs/RecipientWebhook.md)
 - [BitpesaSdk.Sender](docs/Sender.md)
 - [BitpesaSdk.SenderListResponse](docs/SenderListResponse.md)
 - [BitpesaSdk.SenderRequest](docs/SenderRequest.md)
 - [BitpesaSdk.SenderResponse](docs/SenderResponse.md)
 - [BitpesaSdk.SenderState](docs/SenderState.md)
 - [BitpesaSdk.SenderWebhook](docs/SenderWebhook.md)
 - [BitpesaSdk.Transaction](docs/Transaction.md)
 - [BitpesaSdk.TransactionListResponse](docs/TransactionListResponse.md)
 - [BitpesaSdk.TransactionRequest](docs/TransactionRequest.md)
 - [BitpesaSdk.TransactionResponse](docs/TransactionResponse.md)
 - [BitpesaSdk.TransactionState](docs/TransactionState.md)
 - [BitpesaSdk.TransactionTraits](docs/TransactionTraits.md)
 - [BitpesaSdk.TransactionWebhook](docs/TransactionWebhook.md)
 - [BitpesaSdk.ValidationErrorDescription](docs/ValidationErrorDescription.md)
 - [BitpesaSdk.Webhook](docs/Webhook.md)
 - [BitpesaSdk.WebhookDefinition](docs/WebhookDefinition.md)
 - [BitpesaSdk.WebhookDefinitionEventListResponse](docs/WebhookDefinitionEventListResponse.md)
 - [BitpesaSdk.WebhookDefinitionListResponse](docs/WebhookDefinitionListResponse.md)
 - [BitpesaSdk.WebhookDefinitionRequest](docs/WebhookDefinitionRequest.md)
 - [BitpesaSdk.WebhookDefinitionResponse](docs/WebhookDefinitionResponse.md)
 - [BitpesaSdk.WebhookLog](docs/WebhookLog.md)
 - [BitpesaSdk.WebhookLogListResponse](docs/WebhookLogListResponse.md)
 - [BitpesaSdk.WebhookLogMetadata](docs/WebhookLogMetadata.md)
 - [BitpesaSdk.WebhookLogMetadataRequest](docs/WebhookLogMetadataRequest.md)
 - [BitpesaSdk.WebhookLogMetadataResponse](docs/WebhookLogMetadataResponse.md)
 - [BitpesaSdk.WebhookLogResponse](docs/WebhookLogResponse.md)


## Documentation for Authorization

You can set the API Key and Secret by passing a config object when creating an ApiClient:

```js
const apiClient = new ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.bitpesa.co/v1'
});
```

Or by setting the properties on an ApiClient instance:

```js
const apiClient = new ApiClient();
apiClient.apiKey = '<key>';
apiClient.apiSecret = '<secret>';
apiClient.basePath = 'https://api-sandbox.bitpesa.co/v1';
```

## Author




- API version: 1.0
- Package version: 0.1.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
