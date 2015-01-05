/**
* JobListing.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  schema: true,	

  attributes: {

    published : { type: 'date' },

    expires : { type: 'date' }
  }
};

