const fs = require('fs');

function base64_encode(file){
  var bitmap = fs.readFileSync(file);

  return new Buffer(bitmap);
}
console.log(base64_encode('ijisho.jpg'));