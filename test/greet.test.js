let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Sanele correctly', function(){
        assert.equal('HELLO, SANELE', greet('Sanele'));
    });
    it('should greet Hlengiwe correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('HELLO, HLENGIWE', greet('Hlengiwe'));
    });
});