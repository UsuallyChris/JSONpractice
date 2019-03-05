
/** JSON is just a string. Contains nested elements of objects in an array that can be accesed by typical
    JS object notation */
let data = '[ { "name": "Aragorn", "race": "Human" }, { "name": "Gimli", "race": "Dwarf" } ]'; 

// Use the JSON.parse method to parse the data passed in as the argument
data = JSON.parse(data);

// Print "Gimli" to the console
console.log(data[1].name);

// Loop through all the elements in the JSON array and print to console
for (let i = 0; i < data.length; i ++) {
  console.log(`${data[i].name} is a ${data[i].race}.`);
};



// Pulling JSON data from a URL

// Create a new XMLHttpRequest object
let request = new XMLHttpRequest();

// Use GET request to open the file
request.open('GET', 'data.json');

// Parse the JSON data and work with it inside the onload function
request.onload = function() {
  let data = JSON.parse(this.response);

  for(let i = 0; i < data.length; i++) {
    console.log(`${data[i].name} is a ${data[i].race}.`);
  };
}

//Submit the request
request.send();