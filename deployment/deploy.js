const AWS = require("aws-sdk");
//const runCmd = require('./runProcesses').runCmd;
const args = require('minimist')(process.argv.slice(1));
////const fs = require('fs');
//var colors = require('colors');

const profile = args.profile;
// const destinationBucket = args.destinationBucket

if (!profile || profile === "DEFAULT") {
    throw new Error('No profile has been specified. Use --profile to specify one.');
}

// if (!destinationBucket) {
//     throw new Error('No profile has been specified. Use --profile to specify one.');
// }

console.log("profile: ", profile)

// Set correct credentials - i work in an environment where multiple credential profiles are required, 
var credentials = new AWS.SharedIniFileCredentials({profile});
AWS.config.credentials = credentials;

AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
  }
});

var params = {};
var s3 = new AWS.S3({credentials});
s3.listBuckets(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
  /*
  data = {
   Buckets: [
      {
     CreationDate: <Date Representation>, 
     Name: "examplebucket"
    }, 
      {
     CreationDate: <Date Representation>, 
     Name: "examplebucket2"
    }, 
      {
     CreationDate: <Date Representation>, 
     Name: "examplebucket3"
    }
   ], 
   Owner: {
    DisplayName: "own-display-name", 
    ID: "examplee7a2f25102679df27bb0ae12b3f85be6f290b936c4393484be31"
   }
  }
  */
});



// assess credentials
// sync bucket
// remove bucket names to vairables file,