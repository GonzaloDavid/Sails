/**
 * PulsacionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
  controller: function(req, res) {
    return res.send({
      mensaje: 'Hola mundo',
      querys: req.query
    })
  },
  params: function(req, res) {
    return res.send({
      mensaje: 'Hola mundo',
      params: req.params
    })
  },
  compare: function(req, res) {
    console.log('[REQUEST]: ', req.body);
    //if(req.body.nombre.type.localeCompare(''))
    return res.send(req.body);
  },
};

