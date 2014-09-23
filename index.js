
/**
 * Module dependencies.
 */

var pressure = require('atmospheric');


/**
 * Density of air using
 * the ideal gas law.
 * 
 * @param {k} temperature
 * @param {m} altitude
 * @param {Number} humidity (percentage)
 * @param {kg·m−3}
 * @api public
 */

module.exports = function(temperature, altitude, humidity) {
	return pressure(altitude) / (287.058 * temperature);
};
