// jstip-49
var dateTime = Date.now();
var timestamp = Math.floor(dateTime / 1000);

var dateTime1 = new Date().getTime();
var timestamp1 = Math.floor(dateTime / 1000);

// can just add a + sign 
var dateTime3 = +new Date('2012-06-08');
var timestamp3 = Math.floor(dateTime3 / 1000);
console.log(dateTime3, timestamp3);
