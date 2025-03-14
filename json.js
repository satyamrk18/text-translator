// object is in =  key value pair
//the key is always a string
const person = {
  name: "satyam",
  age: 20,
  city: "Nashik",
  greet(time) {
    return `hello, ${person.name} ! the time is ${time}`;
  }
};
console.log(person.name);
console.log(person.greet("2:30"));
