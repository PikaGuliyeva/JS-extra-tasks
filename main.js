// // Objects in Javascript

// // Task 1

// const student = {
//     firstName: "Ali",
//     lastName: "Aliyev",
//     age: 20,
//     city: "Baku"
// }
// console.log(student);

// // Task 2
// console.log(student.firstName, student.age);
// student.age = 21;
// console.log(student);

// // Task 3
// student.isGraduated = false;
// delete student.city;
// console.log(student);

// // Task 4
// const book = {
//     title: "1984",
//     author: "George Orwell",
//     pages: 328
// }
// console.log(book["title"]);
// console.log(book["author"]);
// console.log(book["pages"]);

// // Task 5
// const car = { brand: "BMW", "fuel-type": "Benzin", "user location": "Bakı" };
// console.log(car["fuel-type"]);
// console.log(car["user location"]);
// // fuel-type acarinda defis (-) oldugu ucun bracket notation iwlenir. User location acarinda da bowluq oldugu ucun dot notation istifade etmek olmaz.

// // Task 6
// const laptop = { brand: "ASUS", price: 1500, ram: "16GB"};
// let myKey = "price";
// console.log(laptop[myKey]);

// //  Task 7
// const product = {title: "telefon", price: 800};
// console.log(product);

// product["price"] = 900;
// product["color"] = "Qara";
// console.log(product);

// // Task 8
// const user = {username: "user123", status: "active"};
// let targetKey = "status";
// user[targetKey] = "inactive";
// console.log(user);

// // Task 9
// const movie = {title: "Inception", director: "Nolan", "release-year" : 2010};
// console.log(movie.title, movie["release-year"]);
// console.log(movie.title + " filmi " + movie["release-year"] + " ilinde numayiw olunub." );

// // Task 10
// const person = { name: "Aysel", "job-title": "Dizayner" }; let field = "name";
// // SƏHV SƏTİRLƏR: console.log(person.job-title); console.log(person.field);
// // Duz Setirler awagidadir
// console.log(person["job-title"], person[field]);

// Extra Tasks about Objects

// Task 1
// const car = {brand: "Toyota", model: "Corolla"};
// car.year = 2020;
// car.model = "Camry";
// console.log(car);

// Task 2
// const user = {name: "Kamran", email: "kamran@mail.com", tempToken: "abc123xyz"};
// delete user.tempToken;
// console.log(user);

// Task 3
// const person = {
//     firstName: "Aysel",
//     lastName: "Mammadova",
//     getFullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// }
// console.log(person.getFullName()); 

// Task 4
// const laptop = {
//     brand: "Dell",
//     price: 1800,
//     ram: "16GB",
//     storage: "512GB SSD",
//     objectKeys: function() {
//         return Object.keys(this);
//     }
// }
// console.log(laptop.objectKeys());

// Task 5
// const product = {
//     title: "qulaqlıq",
//     price: 150,
//     inStock: true,
//     objectValues: function() {
//         return Object.values(this);
//     }
// }
// console.log(product.objectValues());

// // Task 6
// const country = {
//     name: "Azerbaijan",
//     capital: "Baku",
//     population: "10M",
//     objectEntries: function() {
//         return Object.entries(this);
//     }
// }
// console.log(country.objectEntries());

// Task 7
// function user (username, role) {
//     this.username = username;
//     this.role = role;
// }
//   const user1 = new user ("Pika", "Guliyeva");
//   const user2 = new user ("Aysel", "Mammadova");
//   console.log(user1);
//   console.log(user2);

// Task 8
// function rectangle (width, height) {
//     this.getArea = function() {
//         return width * height;
//     }
// }
// const rectangle1 = new rectangle(5, 10);
// console.log(rectangle1.getArea());

// Task 9
// const student = {
//     id: 101,
//     score: 85,
//     status: "pending",
// }
// let keyToUpdate = "score";
// let keyToDelete = "status";
// student[keyToUpdate] = 95;
// delete student[keyToDelete];
// console.log(student);   

// Task 10
// const bankAccount = {
//     owner: "Elvin",
//     balance: 500,
//     deposit: function(amount) {
//         this.balance += amount;
//     },
//     withdraw: function(amount) {
//         this.balance -= amount;
//     }
// }
// bankAccount.deposit(200);
// bankAccount.withdraw(100);
// console.log(bankAccount.balance);

// Task 11
// const calculator = {
//     a: 10,
//     b: 5,
// }
// calculator.add = function() {
//     return this.a + this.b;
// }
// calculator.subtract = function() {
//     return this.a - this.b; 
// }
// console.log(calculator.add());
// console.log(calculator.subtract());

// Task 12
// function countProperties(obj) {
//     return Object.keys(obj).length;
// }
// const person = {
//     name: "Pika",
//     age: 28,
//     city: "Baku"
// };
// console.log(countProperties(person)); 

// Task 13
// const cart = {
//     apple: 3,
//     banana: 2,
//     milk: 5,
//     bread: 1,
// }
// const numbers = Object.values(cart);
// const total = numbers.reduce((a,b) => a+b)
// console.log(total);

// Task 14
// const scores = {
//     math: 90, 
//     english: 85,
//     physics: 70,
// }----------????????

// Task 15
// const entries = [["title", "JavaScript Dərsləri"], ["duration", "2 saat"], ["level", "Orta"]];
// const obj = Object.fromEntries(entries);
// obj.isCompleted = true;
// console.log(obj);

// Task 16
// function product (title, price, discount = 0) {
//     this.getFinalPrice = function() {
//         return price - (price * discount / 100);
//     }
// }
//     const product1 = new product ("Telefon", 800, 10);
//     const product2 = new product ("Planset", 500)

// console.log(product1.getFinalPrice());
// console.log(product2.getFinalPrice());

// Task 17
// // Aşağıdakı kodu təhlil edin:
// const timer = { seconds: 10, 
//     start: function() { 
//         console.log(this.seconds); } };
// let run = timer.start;
// run(); // Niyə undefined çıxır? ?????????

// Task 18
// ????

// Task 19
// function student (name, grades = []) {
//     this.name = name;
//     this.grades = grades;
// }
