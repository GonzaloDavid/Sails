/**
 * Pulsacion.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {
  // Pulsacion
 // datastore: 'mysql',

  attributes: {
    nombre: {type: 'string', required: true},
    edad: {type: 'string', required: true}
    /*usuarioIdFK: { model: 'Usuario' type: 'string' }*/
  },

};
