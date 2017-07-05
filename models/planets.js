const mongoose = require('mongoose');
// don't forget to require mongoose in your schema def too!

          // create a new schema called recipeSchema
const planetSchema = new mongoose.Schema({
  name: { type: String, unique: true, default: "Earth"},   // columns are listed as object value pairs with their values being the data type or data type and delimiters (inside another object)
  inhabitable: { type: Boolean, required: true },
  diameter: Number,
  orbit: [{ // columns can contain meta-column type thingies. This is an array of objects as a value.
      period: Number,
      velocity: Number,
      eccentricity: Number
  }]
})
  // this v      and        this v      have to match apparently
const Planet = mongoose.model('Planet', planetSchema) // creates a model of recipeSchema and stores it for export

module.exports = Planet;    // exports the Planet schema for use.
