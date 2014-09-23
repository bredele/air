
/**
 * Test dependencies.
 */

var assert = require('assert');
var round = require('round');
var air = require('..');

describe("dry air", function() {

	describe("altitude 0", function() {
		it("0°C", function() {
			assert.equal(round(air(273.15), 4), 1.2922);
		});

		it("0°C", function() {
			assert.equal(round(air(293.15), 4), 1.2041);
		});	
	});
});
