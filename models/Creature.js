const mongoose = require('./connection.js');
const Schema = mongoose.Schema;

const Creature = new Schema({
    name: String,
    description: String,
});

module.exports = mongoose.model('Creature', Creature);
/* Step 3
 *
 * TODO: export the schema
 */
//module.exports = mongoose.model('Sample', SampleModelSchema);
