const Model = require('objection').Model;

function Product() {
  Model.apply(this, arguments);
}

Model.extend(Product);

Product.tableName = 'products';

Product.jsonSchema = {
  type: 'object',
  required: [],

  properties: {
    name: {type: 'string'},
    serial_number: {type: 'timestamp'},
    color: {type: 'string'},
    size: {type: 'integer'},
    price: {type: 'integer'},
    availability: {type: 'integer'},
    }
  }

// Product.relationMapping
// {
  
// }
module.exports = Product;