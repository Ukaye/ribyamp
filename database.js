var Datastore = require('nedb');


// Initialize two nedb databases
// =================              BAAMP      ==================         //

var  Agent = new Datastore({filename:__dirname +'/data/Agent', autoload: true });
var  user = new Datastore({filename:__dirname +'/data/user', autoload: true });


  module.exports = {
	  Agent: Agent,
	  user :user
  };
