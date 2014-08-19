/**
 *  JSON Archetypes – JSON standards for common types of data
 */


/**
 * Add Archetypes
 */
var archetypes = {};

archetypes.product = require('./archetypes/product/product_archetype_schema');
archetypes.receipt = require('./archetypes/receipt/receipt_archetype_schema');
archetypes.image   = require('./archetypes/image/image_archetype_schema');
archetypes.task = require('./archetypes/task/task_archetype_schema');

module.exports.archetypes = archetypes;


/**
 * Add Validators
 */

module.exports.validateProduct = require('./archetypes/product/product_archetype_validation'); 
module.exports.validateTask = require('./archetypes/task/task_archetype_validation'); 
