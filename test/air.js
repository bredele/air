
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

		it("20°C", function() {
			assert.equal(round(air(293.15), 4), 1.2041);
		});	
	});
});

describe("water air", function() {

	describe("altitude 0", function() {
		it("0°C, 100% humidity", function() {
			assert.equal(round(air(273.15, 0, 1), 4), 1.2893);
		});

		it("20°C, 70% humidity", function() {
			assert.equal(round(air(293.15, 0, .7), 4), 1.1967);
		});

	});
});