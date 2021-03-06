/**
* Skill.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,

  attributes: {

    name : { type: 'string' },

    type : { type: 'string' }, //enum

    // has one range
    range : {
    	model : 'range'
    },

    // has one unit
    unit : {
    	model : 'unit'
    }
  }
};

