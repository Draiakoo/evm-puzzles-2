const web3 = require("web3");

var number;
var hexString;
var moreZeros;
var hash;
var bytes;

for(let number = 1; number < 1000; number++){
    hexString = number.toString(16);
    moreZeros = 64 - hexString.length;
    hexString = "0x" + "0".repeat(moreZeros) + hexString;
    hash = web3.utils.soliditySha3(hexString);
    bytes = hash.substring(2,4);
    //console.log(bytes, number);
    if(bytes==="a8"){
        console.log(number);
        break
    }
}
