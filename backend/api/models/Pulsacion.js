/**
 * Pulsacion.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {
  // Pulsacion
 // datastore: 'mysql',

  id:
    { type:'number' ,autoIncrement: false},
  createdAt:{type: 'number',autoCreatedAt:false},
  updatedAt:{type: 'number',autoCreatedAt:false},
  attributes: {
    nombre: {type: 'string', required: true},
    edad: {type: 'string', required: true}
    /*usuarioIdFK: { model: 'Usuario' type: 'string' }*/

  },

};
