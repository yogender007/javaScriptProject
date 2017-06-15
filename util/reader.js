var fs = require('fs');
var validator = require('validator');
contentfromFile = fs.readFileSync('./data/input1.txt','utf8');


//fuction to extract the rows as records from txt file datasource
exports.getRecords = function getRecords(contentfromFile) {
var allTextLines = contentfromFile.split(/\r\n|\n/);
var headers = allTextLines[0].split(',');
var records = [];

for (var i=0; i<allTextLines.length; i++) {
var data = allTextLines[i].split(',');

if (data.length == headers.length) {
var tempArr = [];
 for (var j=0; j<headers.length; j++) {
  tempArr.push(data[j]);
  }
records.push(tempArr);
 }

// If there are more data fields than headers
if (data.length > headers.length) {
var tempArr = [];
 for (var j=0; j<headers.length; j++) {
  tempArr.push(data[j]);
  }
  tempArr.push("Invalid record: An extra entry for the field in record is detected");
records.push(tempArr);
 }

 // If there are less data fields than headers
 if (data.length < headers.length) {
var tempArr = [];
 for (var j=0; j<headers.length; j++) {
  tempArr.push(data[j]);
  }
  tempArr.push("Invalid record: An missing entry for atleast a field in record is detected");
 
 
records.push(tempArr);
 }
}
return records;
};

  	
  






