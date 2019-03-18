import BitpesaSdk from 'bitpesa-sdk';

const apiClient = new BitpesaSdk.ApiClient({
  apiKey: '<key>',
  apiSecret: '<secret>',
  basePath: 'https://api-sandbox.bitpesa.co/v1'
});

// accountValidationExample(apiClient);
// createSenderExample(apiClient);
// updateSenderExample(apiClient);
// createTransactionExample(apiClient);
// createAndFundTransactionExample(apiClient);
// getTransactionErrorMessageExample(apiClient);
// webhookParseExample(apiClient);
// getAccountsExample(apiClient);

async function accountValidationExample(apiClient) {
  const request = new BitpesaSdk.AccountValidationRequest();
  request.bank_account = '9040009999999';
  request.bank_code = '190100';
  request.country = BitpesaSdk.AccountValidationRequest.CountryEnum.GH;
  request.currency = BitpesaSdk.AccountValidationRequest.CurrencyEnum.GHS;
  request.method = BitpesaSdk.AccountValidationRequest.MethodEnum.BANK;
  const api = new BitpesaSdk.AccountValidationApi(apiClient);
  try {
    const response = await api.postAccountValidations(request);
    console.log(response.object);
  } catch (e) {
    if (e.isValidationError) {
      const accountValidationResponse = e.getResponseObject();
      console.error(
        `Account Holder Name Error: ${accountValidationResponse.meta.error}`
      );
    } else {
      throw e;
    }
  }
}

async function createSenderExample(apiClient) {
  const api = new BitpesaSdk.SendersApi(apiClient);
  const sender = new BitpesaSdk.Sender();

  sender.country = 'UG';
  sender.phone_country = 'UG';
  sender.phone_number = '752403639';
  sender.email = 'example@home.org';
  sender.first_name = 'Johnny';
  sender.last_name = 'English';
  sender.ip = '127.0.0.1';
  sender.city = 'Kampala';
  sender.street = 'Unknown 17-3';
  sender.address_description = 'Office Address';
  sender.postal_code = '798983';
  sender.birth_date = '1970-12-31';
  sender.documents = [];

  try {
    const senderRequest = new BitpesaSdk.SenderRequest();
    senderRequest.sender = sender;

    const senderResponse = await api.postSenders(senderRequest);
    console.log(`Sender created! ID: ${senderResponse.object.id}`);
    console.log(senderResponse.object);
    return senderResponse.object.id;
  } catch (e) {
    if (e.isValidationError) {
      const senderResponse = e.getResponseObject();
      console.error('Validation error:', senderResponse.object.errors);
    } else {
      throw e;
    }
  }
}

async function updateSenderExample(apiClient) {
  const api = new BitpesaSdk.SendersApi(apiClient);
  const sender = new BitpesaSdk.Sender();

  sender.city = 'London';
  try {
    const senderRequest = new BitpesaSdk.SenderRequest();
    senderRequest.sender = sender;

    const senderResponse = await api.patchSender('a35f0aab-c0e8-4ffd-9df0-d3ac7cc80a41',senderRequest);
    console.log(`Sender created! ID: ${senderResponse.object.id}`);
    console.log(senderResponse.object);
    return senderResponse.object.id;
  } catch (e) {
    if (e.isValidationError) {
      const senderResponse = e.getResponseObject();
      console.error('Validation error:', senderResponse.object.errors);
    } else {
      throw e;
    }
  }
}

async function createTransactionExample(apiClient) {
  const api = new BitpesaSdk.TransactionsApi(apiClient);
  const transaction = new BitpesaSdk.Transaction();

  const sender = new BitpesaSdk.Sender();
  sender.id = '58754ae1-d2e4-440c-9a81-d290ece2de0d';

  const ngnBankDetails = new BitpesaSdk.PayoutMethodDetails();
  ngnBankDetails.bank_account = '123456789';
  ngnBankDetails.bank_account_type = '20';
  ngnBankDetails.bank_code = '082';
  ngnBankDetails.first_name = 'First';
  ngnBankDetails.last_name = 'Last';

  const payoutMethod = new BitpesaSdk.PayoutMethod();
  payoutMethod.type = 'NGN::Bank';
  payoutMethod.details = ngnBankDetails;

  const recipient = new BitpesaSdk.Recipient();
  recipient.requested_amount = 10000;
  recipient.requested_currency = 'NGN';
  recipient.payout_method = payoutMethod;

  transaction.input_currency = 'GHS';
  transaction.sender = sender;
  transaction.recipients = [recipient];

  try {
    const transactionRequest = new BitpesaSdk.TransactionRequest();
    transactionRequest.transaction = transaction;
    const transactionResponse = await api.postTransactions(transactionRequest);
    console.log(`Transaction created! ID: ${transactionResponse.object.id}`);
    console.log(transactionResponse.object);
    return transactionResponse.object.id;
  } catch (e) {
    if (e.isValidationError) {
      const transactionResponse = e.getResponseObject();
      console.error('Validation error:', transactionResponse.object.errors);
    } else {
      throw e;
    }
  }
}

async function createAndFundTransactionExample(apiClient) {
  const transactionId = await createTransactionExample(apiClient);
  if (transactionId != null) {
    const debit = new BitpesaSdk.Debit();
    debit.currency = 'GHS';
    debit.to_id = transactionId;
    debit.to_type = 'Transaction';

    const debitRequest = new BitpesaSdk.DebitRequestWrapper();
    debitRequest.debit = debit;

    const debitsApi = new BitpesaSdk.AccountDebitsApi(apiClient);
    try {
      const debitListResponse = await debitsApi.postAccountsDebits(
        debitRequest
      );
      console.log('Transaction Funded Successfully');
      console.log(debitListResponse.object[0]);
    } catch (e) {
      if (e.isValidationError) {
        const debitListResponse = e.getResponseObject();
        console.error('Transaction could not be funded');
        console.error(debitListResponse.object[0].errors);
      } else {
        throw e;
      }
    }
  }
  return transactionId;
}

async function getTransactionErrorMessageExample(apiClient) {
  const transactionId = 'f94a3af4-0637-4498-9184-7733bf0b8af7';
  const api = new BitpesaSdk.TransactionsApi(apiClient);
  const transaction = await api.getTransaction(transactionId);
  console.log(
    `Get recipient's state error message: ${
      transaction.object.recipients[0].state_reason
    }`
  );
}

async function webhookParseExample(apiClient) {
  const webhookContent = `{
  "webhook": "02b769ff-ffff-ffff-ffff-820d285d76c7",
  "event": "transaction.created",
  "object": {
    "id": "9170b966-ffff-ffff-ffff-7af5ad7e335f",
    "metadata": {},
    "state": "approved",
    "input_amount": 50.00,
    "input_currency": "EUR",
    "sender": {
      "id": "4be2a144-ffff-ffff-ffff-8ebcbfbbbe0c",
      "type": "person",
      "state": "initial",
      "state_reason": null,
      "country": "GB",
      "street": "Test",
      "postal_code": "EH1 1TT",
      "city": "London",
      "phone_country": "GB",
      "phone_number": "+447123456789",
      "email": "test@example.com",
      "ip": "127.0.0.1",
      "first_name": "Test",
      "last_name": "Name",
      "birth_date": "1990-01-01",
      "metadata": {},
      "providers": {}
    },
    "payin_methods": [],
    "paid_amount": 50.00,
    "due_amount": 0,
    "recipients": [
      {
        "id": "69dee5aa-ffff-ffff-ffff-0a2c06353c6b",
        "transaction_id": "9170b966-ffff-ffff-ffff-7af5ad7e335f",
        "created_at": "2017-07-24T15:08:58Z",
        "input_usd_amount": 60.00,
        "state": "initial",
        "transaction_state": "initial",
        "requested_amount": 50.00,
        "requested_currency": "EUR",
        "input_amount": 50.00,
        "input_currency": "EUR",
        "output_amount": 20001,
        "output_currency": "NGN",
        "payout_method": {
          "id": "c67580ee-ffff-ffff-ffff-ac51f1d0c035",
          "type": "NGN::Bank",
          "details": {
            "email": "",
            "bank_code": "011",
            "last_name": "Test",
            "first_name": "User",
            "bank_account": "1111111111",
            "bank_account_type": "10"
          },
          "metadata": {},
          "provider": "interswitch",
          "fields": {
            "email": {
              "type": "input",
              "validations": {
                "format": "\\\\A((\\\\w+([\\\\-+.]\\\\w+)*@[a-zA-Z0-9]+([\\\\-\\\\.][a-zA-Z0-9]+)*)*){3,320}\\\\z"
              }
            },
            "first_name": {
              "type": "input",
              "validations": {
                "presence": true
              }
            },
            "last_name": {
              "type": "input",
              "validations": {
                "presence": true
              }
            },
            "bank_code": {
              "type": "select",
              "options": {
                "063": "Diamond Bank",
                "050": "EcoBank",
                "214": "FCMB Bank",
                "070": "Fidelity Bank",
                "011": "First Bank of Nigeria",
                "058": "Guaranty Trust Bank ",
                "030": "Heritage Bank",
                "301": "Jaiz Bank",
                "082": "Keystone ",
                "014": "Mainstreet ",
                "076": "Skye Bank",
                "039": "Stanbic IBTC Bank ",
                "232": "Sterling bank",
                "032": "Union Bank",
                "033": "United Bank for Africa ",
                "215": "Unity Bank",
                "035": "Wema Bank",
                "057": "Zenith International "
              },
              "validations": {
                "presence": true,
                "inclusion": {
                  "in": {
                    "063": "Diamond Bank",
                    "050": "EcoBank",
                    "214": "FCMB Bank",
                    "070": "Fidelity Bank",
                    "011": "First Bank of Nigeria",
                    "058": "Guaranty Trust Bank ",
                    "030": "Heritage Bank",
                    "301": "Jaiz Bank",
                    "082": "Keystone ",
                    "014": "Mainstreet ",
                    "076": "Skye Bank",
                    "039": "Stanbic IBTC Bank ",
                    "232": "Sterling bank",
                    "032": "Union Bank",
                    "033": "United Bank for Africa ",
                    "215": "Unity Bank",
                    "035": "Wema Bank",
                    "057": "Zenith International "
                  }
                }
              }
            },
            "bank_account": {
              "type": "input",
              "validations": {
                "presence": true
              }
            },
            "bank_account_type": {
              "type": "select",
              "options": {
                "20": "Current",
                "10": "Savings"
              },
              "validations": {
                "presence": true,
                "inclusion": {
                  "in": {
                    "20": "Current",
                    "10": "Savings"
                  }
                }
              }
            }
          }
        },
        "metadata": {}
      }
    ],
    "created_at": "2017-07-24T15:08:58Z",
    "expires_at": "2017-07-24T16:08:58Z"
  }
}`;
  const webhook = apiClient.parseResponseString(webhookContent, BitpesaSdk.Webhook);
  if (webhook.event.startsWith('transaction')) {
    const transactionWebhook = apiClient.parseResponseString(
      webhookContent,
      BitpesaSdk.TransactionWebhook
    );
    console.log(transactionWebhook);
  } else if (webhook.event.startsWith('recipient')) {
    const recipientWebhook = apiClient.parseResponseString(
      webhookContent,
      BitpesaSdk.RecipientWebhook
    );
    console.log(recipientWebhook);
  } else if (webhook.event.startsWith('payout_method')) {
    const payoutMethodWebhook = apiClient.parseResponseString(
      webhookContent,
      BitpesaSdk.PayoutMethodWebhook
    );
    console.log(payoutMethodWebhook);
  } else if (webhook.event.startsWith('sender')) {
    const senderWebhook = apiClient.parseResponseString(
      webhookContent,
      BitpesaSdk.SenderWebhook
    );
    console.log(senderWebhook);
  } else if (webhook.event.startsWith('document')) {
    const documentWebhook = apiClient.parseResponseString(
      webhookContent,
      BitpesaSdk.DocumentWebhook
    );
    console.log(documentWebhook);
  }
}

async function getAccountsExample(apiClient) {
  const api = new BitpesaSdk.AccountsApi(apiClient);
  try {
    const response = await api.getAccounts();
    response.object.forEach(account => console.log(account));
    console.log(response.meta);
  } catch (e) {
    console.error(e.stack);
  }
}
