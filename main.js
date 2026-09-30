// Objects in Javascript

// Task 1

const student = {
    firstName: "Ali",
    lastName: "Aliyev", 
    age: 20,
    city: "Baku"
}
console.log(student);

// Task 2
console.log(student.firstName, student.age);
student.age = 21;
console.log(student);

// Task 3
student.isGraduated = false;
delete student.city;
console.log(student);

// Task 4
const book = {
    title: "1984",
    author: "George Orwell",
    pages: 328
}
console.log(book["title"]);
console.log(book["author"]);
console.log(book["pages"]);


// Task 5
const car = { brand: "BMW", "fuel-type": "Benzin", "user location": "Bakı" };
console.log(car["fuel-type"]);
console.log(car["user location"]);
// fuel-type acarinda defis (-) oldugu ucun bracket notation iwlenir. User location acarinda da bowluq oldugu ucun dot notation istifade etmek olmaz.


// Task 6
const laptop = { brand: "ASUS", price: 1500, ram: "16GB"};
let myKey = "price";
console.log(laptop[myKey]);


//  Task 7
const product = {title: "telefon", price: 800};
console.log(product);

product["price"] = 900;
product["color"] = "Qara";
console.log(product);


// Task 8
const user = {username: "user123", status: "active"};
let targetKey = "status";
user[targetKey] = "inactive";
console.log(user);


// Task 9
const movie = {title: "Inception", director: "Nolan", "release-year" : 2010};
console.log(movie.title, movie["release-year"]);
console.log(movie.title + " filmi " + movie["release-year"] + " ilinde numayiw olunub." );


// Task 10
const person = { name: "Aysel", "job-title": "Dizayner" }; let field = "name";
// SƏHV SƏTİRLƏR: console.log(person.job-title); console.log(person.field);
// Duz Setirler awagidadir
console.log(person["job-title"], person[field]);















