/**
 *  JSON Archetypes – JSON standards for common types of data
 */


/**
 * Add Archetypes
 */
var archetypes = {};

archetypes.tinytext = require('./archetypes/product/tiny_text_archetype_schema');
archetypes.product = require('./archetypes/product/product_archetype_schema');
archetypes.receipt = require('./archetypes/receipt/receipt_archetype_schema');
archetypes.image = require('./archetypes/image/image_archetype_schema');
archetypes.task = require('./archetypes/task/task_archetype_schema');

module.exports.archetypes = archetypes;
