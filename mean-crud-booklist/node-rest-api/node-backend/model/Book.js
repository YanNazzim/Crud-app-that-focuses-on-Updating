const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema({
    isbn: { type: String },
    title: { type: String },
    author: { type: String },
    description: { type: String },
    published_year: { type: String },
    publisher: { type: String },
    updated_date: { type: Date, default: Date.now }
}, {
    collection: 'books'
});

module.exports = mongoose.model('Book', BookSchema);
