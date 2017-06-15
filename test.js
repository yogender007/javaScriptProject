var cahi = require('mocha');
var cahi = require('chai');
var expect = require('chai').expect;
var fs = require('fs');
var fieldValidator = require('./fieldValidatorApp/fieldValidator');
var contentfromFile = fs.readFileSync('./data/input1.txt', 'utf8');
var reader = require('./util/reader');



describe('TransactionID should be number',function() {
it('TransactionID passed to function',function() {
 for (var k=1; k<reader.getRecords(contentfromFile).length; k++) {

	if (!fieldValidator.validateTransactionId(reader.getRecords(contentfromFile)[k][0])) {
		console.log(reader.getRecords(contentfromFile)[0][0]+"["+k+"]"+ " is not valid" );	
	}
}
});

});


describe('ClientID can not be blank' ,function() {
it('TransactionID passed to validation function',function() {

 for (var k=1; k<reader.getRecords(contentfromFile).length; k++) {

	if (!fieldValidator.validateClientId(reader.getRecords(contentfromFile)[k][1])) {
		console.log(reader.getRecords(contentfromFile)[0][1]+"["+k+"]"+ " is not valid" );
	}

}
});
});

describe('Txn amount should be valid amount' ,function() {
it('Transaction amount passed to validation function',function() {

 for (var k=1; k<reader.getRecords(contentfromFile).length; k++) {

	if (!fieldValidator.validateTransactionAmount(reader.getRecords(contentfromFile)[k][2])) {
		console.log(reader.getRecords(contentfromFile)[0][2]+"["+k+"]"+ " is not valid" );
	}
}
});
});


describe('product validation is for future use' ,function() {
it('product passed to validation function',function() {

 for (var k=1; k<reader.getRecords(contentfromFile).length; k++) {

	if (!fieldValidator.validateProduct(reader.getRecords(contentfromFile)[k][3])) {
		console.log(reader.getRecords(contentfromFile)[0][3]+"["+k+"]"+ " is not valid" );
	}
}
});
});


describe('product validation is for future use' ,function() {
it('product passed to validation function',function() {

 for (var k=1; k<reader.getRecords(contentfromFile).length; k++) {

	if (!fieldValidator.validateDatetime(reader.getRecords(contentfromFile)[k][4])) {
		console.log(reader.getRecords(contentfromFile)[0][4]+"["+k+"]"+ " is not valid" );
	}
}
});
});
	