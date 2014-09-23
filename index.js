
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
 * @param {%} humidity (0.5 for 50%)
 * @param {kg·m−3}
 * @api public
 */

function density(temperature, altitude, humidity) {
	var pressure = 100 * atmospheric(altitude || 0);
	var rh = humidity ? density.constant(temperature, pressure, humidity) : 287.058;
	return pressure / (rh * temperature);
}


/**
 * Specific gas constant for water air.
 * 
 * @param  {K} temperature 
 * @param  {Pa} pressure 
 * @param  {%} humidity 
 * @return {J.K-1.mol-1}
 * @api private
 */

density.constant = function(temperature, pressure, humidity) {
	var psat = density.saturation(temperature);
  return 287.058 / (1 - (humidity * psat/pressure) * (1 - 287.058/461));
};


/**
 * Saturation vapor pressure.
 * 
 * @param  {C} temperature
 * @return {Pa}
 * @api private 
 */

density.saturation = function(temperature) {
	return 611.657 * Math.exp(17.2799 - (4102.99 / (temperature - 35.719)));
};