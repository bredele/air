
/**
 * Module dependencies.
 */

var atmospheric = require('atmospheric');


/**
 * Expose air density.
 */

module.exports = density;


/**
 * Density of air using
 * the ideal gas law.
 * 
 * @param {K} temperature
 * @param {m} altitude
 * @param {Number} humidity (percentage)
 * @param {kg·m−3}
 * @api public
 */

function density(temperature, altitude, humidity) {
	var pressure = atmospheric(altitude || 0);
	var rh = humidity ? constant(temperature, pressure, humidity) : 287.058;
	return 100 * pressure / (rh * temperature);
};


/**
 * Specific gas constant for water air.
 * 
 * @param  {K} temperature 
 * @param  {hPa} pressure 
 * @param  {%} humidity 
 * @return {J.K-1.mol-1}
 * @api private
 */

density.constant = function constant(temperature, pressure, humidity) {
	var psat = sat(temperature - 273.15);
  return 287.06 / (1 - (humidity * psat/pressure) * (1 - 287.06/461));
};


/**
 * Saturation vapor pressure.
 * 
 * @param  {C} temperature
 * @return {hPa}
 * @api private 
 */

density.saturation = function sat(temperature) {
	return 611.213 * Math.exp(17.5043 * temperature / (241.2 + temperature));
};