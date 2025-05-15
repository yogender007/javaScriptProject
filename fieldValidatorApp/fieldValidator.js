var fs = require('fs');
var validator = require('validator');
var reader = require('../util/reader');

ValidateFileValues();

// function to validate TxnID
//This is a commnet addded
exports.validateTransactionId = function validateTransactionId(TxnID) {
	//should be a number
	return validator.isInt(TxnID); 
};

// function to validate clientID
exports.validateClientId  = function validateClientId(clientID) {
// can't be blank
return !validator.isEmpty(clientID)	
};

// function to validate TxnAmount
exports.validateTransactionAmount = function validateTransactionAmount(TxnAmount) {
// should be a valid amount
return validator.isCurrency(TxnAmount); 
};

// function to validate product
exports.validateProduct = function validateProduct(product) {
	// no validation at the moment, method can be used for future
	return true;
};

// function to validate datetime
exports.validateDatetime = function validateDatetime(datetime) {
	var dateValue = new Date(datetime);
	var currnntDate = new Date();

	if (dateValue < currnntDate) {
		return true;
	}
	else 
		return false;

	// datetime should not be in future 
}


// method to check the values
function ValidateFileValues() {
 
/*
	for (var k=1; k<reader.getRecords(contentfromFile).length; k++) {

	if (!validateTransactionId(reader.getRecords(contentfromFile)[k][0])) {
		console.log(getRecords(contentfromFile)[0][0]+"["+k+"]"+ " is not valid" );	
	}
	if (!validateClientId(reader.getRecords(contentfromFile)[k][1])) {
		console.log(reader.getRecords(contentfromFile)[0][1]+"["+k+"]"+ " is not valid" );
	}
	if (!validateTransactionAmount(reader.getRecords(contentfromFile)[k][2])) {
		console.log(reader.getRecords(contentfromFile)[0][2]+"["+k+"]"+ " is not valid" );
	}
	if (!validateProduct(reader.getRecords(contentfromFile)[k][3])) {
		console.log(reader.getRecords(contentfromFile)[0][3]+"["+k+"]"+ " is not valid" );
	}
	if (!validateDatetime(reader.getRecords(contentfromFile)[k][4])) {
		console.log(reader.getRecords(contentfromFile)[0][4]+"["+k+"]"+ " is not valid" );
	}
	*/
	
}
  	
  
