
// var db = require('../server/db2.js');

// db.connection('shanghaiexplorer_test');

// describe("Spot", function(){
//     var currentSpot = null;

//     beforeEach(function(done){	
// 	currentSpot = new db.Spot({
// 	    title : 'Y.M.C.A',
// 	    address : '西藏南路123号，近延安东',
// 	    description : 'Big restaurant ala merciaine',
// 	    phone : '86 21 6326 1040'
// 	});
	
// 	done();
//     });

//     it("retrieves right latitude and longitude", function(done){
// 	currentSpot.geoCode(function(err, loc) {
// 	    err.should.equal(false);
// 	    loc.lng.should.equal(121.479547);
// 	    loc.lat.should.equal(31.227363);
	    
// 	    currentSpot.lng.should.equal(121.479547);
// 	    currentSpot.lat.should.equal(31.227363);
// 	    done();
// 	});
//     });
   
// });
