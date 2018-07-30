/**
 * Usuario.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {
  attributes: {

    TipoUsuario: {type: 'string', required: true},
    Nombre: {type: 'string', required: true},
    Apellido: {type: 'string', required: true},
    correo: {type: 'string', required: true},
    telefono: {type: 'string', required: true},
    Password: {type: 'string', required: true}
  },
};

