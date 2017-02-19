const Model = require('objection').Model;

function Customer() {
  Model.apply(this, arguments);
}

Model.extend(Customer);

Customer.tableName = 'customers';

Customer.jsonSchema = {
  type: 'object',
  required: [],

  properties: {
    name: {type: 'string'},
    surname: {type: 'string'},
    address: {type: 'string'},
    bank_account: {type: 'string'},
    phone_number: {type: 'string'},
    mobile_number: {type: 'string'},
    }
  }

module.exports = Customer;