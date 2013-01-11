
var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var TmpSchema = new Schema({
    title : {
	type : String
    }
});

TmpSchema.methods.myMethod = function() {
    
}

function connection(db_name) {
    mongoose.connect('mongodb://localhost/' + db_name);

    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback () {
    	console.log('+-- Successfully connected to database');
    });    
}

//
//
//
module.exports.connection = function(db_name) {    
    connection(db_name);
}

module.exports.Tmp = mongoose.model('tmpV19', TmpSchema);
