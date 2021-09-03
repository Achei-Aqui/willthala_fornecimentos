const url = 'https://people-app.herokuapp.com/';
console.log('heeere')

var request = new Request(url, {
  method: 'POST',
  body: JSON.stringify(dictionary),
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
  }
})

fetch(request)
.then(function(data) {
  console.log(data, "RESPONSE")

})

.catch(function(error) {
  console.log(error);
})
