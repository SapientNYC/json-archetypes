module.exports.run = function(callback) {

	/**
	 * Test Receipt Archetype
	 */
	var ZSchema = require("z-schema");
	var validator = new ZSchema();
	var test = require('tape');
	var JATs = require('../index');


	test('****** Test Receipt Archetype Schema', function(t) {
		validator.validateSchema(JATs.archetypes.receipt, function(err, report) {
			t.equal(report.valid, true, 'Schema is valid per JSON Schema v4');
			t.end();
		});
	});

	test('****** Test Receipt Archetype Instantiation', function(t) {
		var receipt = JATs.new('receipt');
		t.equal(typeof receipt.price_total !== 'undefined', true);
		t.end();
	});

	// Test Callback
	callback();

}