/**
* Assignment.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: { type: 'string', unique: false, required: true },
  	dueAt: { type: 'datetime', unique: false, required: true },
  	url: { type: 'string', unique: false, required: true }
  }
};

