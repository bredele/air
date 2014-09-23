
/**
 * Test dependencies.
 */

var assert = require('assert');
var air = require('..');

describe("dry air", function() {

	describe("altitude 0", function() {
		it("0°C", function() {
			assert.equal(air(0), 1.2922);
		});	
	});
});
