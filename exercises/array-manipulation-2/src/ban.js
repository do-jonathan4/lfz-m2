/* global sinon */
/* eslint-disable no-unused-vars */

function ban(object, ...methods) {
  methods.forEach(method => {
    sinon.stub(object, method).throws(
      'No Cheating!',
      `Do not use ${object.constructor.name}.prototype.${method} in your implementation!`
    );
  });
  return object;
}
