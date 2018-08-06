/**
 * PulsacionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
//var led = require('Led');

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
    //0 si es igual
    //-1 si no es igual
    var str2="encender";

    //console.log('[REQUEST]: ', req.body.nombre);
    //led.llamar();
    if(req.body.accion.localeCompare(str2)===0)
    {
     console.log("if",req.body.nombre);
      return res.send(req.body.nombre);
    }else
    {
      console.log("else",req.body.nombre);
      return res.send('enviaste apagado');
    }

  },
  enviar: function(req, res) {
    //npm i require
    const request = require('request');
    //0 si es igual
    //-1 si no es igual
    console.log('Enviar datos');

    const objetoRequest = {
      url: 'http://localhost:1338/usuarioRasberry',
      form: {
        nombre: req.body.nombre,
        accion: req.body.accion,


        // usuarioIdFK: 'como estas'// USEN EL SUYO
      }
    };
    request
      .post(objetoRequest)
    return res.send(req.body);
  },
};

