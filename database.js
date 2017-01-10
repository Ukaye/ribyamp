var Datastore = require('nedb');


// Initialize two nedb databases
// =================              BAAMP      ==================         //

var  Agent = new Datastore({filename:__dirname +'/data/Agent', autoload: true });
var  user = new Datastore({filename:__dirname +'/data/user', autoload: true });
var  Aggregator = new Datastore({filename:__dirname +'/data/Aggregator', autoload: true });
var  Admin = new Datastore({filename:__dirname +'/data/Admin', autoload: true });
var  Association = new Datastore({filename:__dirname +'/data/Association', autoload: true });
var  Document = new Datastore({filename:__dirname +'/data/Document', autoload: true });
var  Member = new Datastore({filename:__dirname +'/data/Member', autoload: true });



  module.exports = {
	  Agent: Agent,
	  user :user,
	  Aggregator:Aggregator,
	  Admin: Admin,
	  Association: Association,
	  Document: Document,
	  Member: Member
  };
