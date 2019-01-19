const https = require('https');

const options = {
    host: 'api.pubg.com',
    path: '/shards/steam/leaderboards/solo?page[number]=0',
    method: 'GET',
    headers: {
        "Accept": "application/vnd.api+json",
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJmNjFhM2QwMC1mZDg3LTAxMzYtYWE0MS0wM2RjN2YxZjgyYzkiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTQ3ODQwOTEzLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Im1jZG9semxuIn0.5aLHkXHd_glPo9RJ02SJARMGjPbEnaz3wWekwMrz4ZE"
    }
  };

var result = [];


https.get(options, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    var newObj = JSON.parse(data).included;
    newObj.map((elem)=>{
      //console.log(elem.attributes);
      result.push(elem.attributes);
    });
    //console.log("Array is:");
    //console.log(result);
    
  });



}).on("error", (err) => {
  console.log("Error: " + err.message);
});

console.log("RESULT really IS:");
console.log(result);

module.exports = result;

