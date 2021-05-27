
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    //The model should have a String SchemaType called name to describe the genre.
    //This name should be required and have between 3 and 100 characters.
    name: {type: String, required: true, maxLength: 100, minLength: 3}
  }
);

//Declare a virtual for the genre's URL, named url.
GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('Genre', GenreSchema);