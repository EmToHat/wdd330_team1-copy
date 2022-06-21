import QuakesController from './controller.js';
const listElement = '#quakeList';
const InstantaceQuake = new QuakesController(listElement);

InstantaceQuake.init();

document.getRadius = function getRadius() {
  const rad = document.getElementById('radius').value;
  InstantaceQuake.getQuakesByRadius(rad);
};
