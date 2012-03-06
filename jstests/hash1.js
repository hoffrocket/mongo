
t = db.hash1;
t.drop();

t.save( { a : {"foo": "bar"} } );
t.save( { a : ["a", "b"] });


assert.eq( 1 , t.find( { a : { $hash : "d609528b8ba785f157ab1f9fb2ee5b3e" }} ).itcount() , "A1" );
assert.eq( 1 , t.find( { a : { $hash : "b3167018b90fee96e8914eb693dafda2" } } ).itcount() , "A2" );

t.ensureIndex( { a : 1 } );

assert.eq( 1 , t.find( { a : { $hash : "d609528b8ba785f157ab1f9fb2ee5b3e" }} ).itcount() , "B1" );
assert.eq( 1 , t.find( { a : { $hash : "b3167018b90fee96e8914eb693dafda2" } } ).itcount() , "B2" );
