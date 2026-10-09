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
// function Student(name, grades = []) {   
//     this.addGrade = function(grade) {
//         grades.push(grade);
//     };

//     this.getAverage = function() {
//         return grades.reduce((sum, grade) => sum + grade) / grades.length;
//     };
// }
// const student1 = new Student("Pika");

// student1.addGrade(80);
// student1.addGrade(90);
// student1.addGrade(70);

// console.log(student1.getAverage()); 

// Task 20
// store = {
//     inventory : {
//         phone: 10,
//         laptop: 5,
//         tablet: 8
//     },
//     sellItem: function(item, quantity) {}
        
// }?????

// 14, 18, 20 - Yaza bilmediklerim




// Arrays in Javascript
// Task 1
// let numbers = [];
// numbers.push(10, 20, 30);
// console.log(numbers);

// Task 2
// let nums = [5, 10, 15, 20];
// let pops = nums.pop();
// console.log(nums);
// console.log(pops);

// Task 3
// let fruits = ["banan", "alma"];
// let unshifts = fruits.unshift("gilas");
// console.log(fruits);

// Task 4
// let colours = ["qirmizi", "yasil", "mavi"];
// let shifts = colours.shift();
// console.log(colours);

// Task 5
// let array1= [1, 2];
// let array2 = [3, 4];
// let fullArray = array1.concat(array2);
// console.log(fullArray);

// Task 6
// let letters = ["a", "b", "c", "d", "e"];
// let sliced = letters.slice(1, 3);
// console.log(sliced);

// Task 7
// let nums =  [10, 20, 50, 60];
// let spliced = nums.splice(2, 0, 30, 40);
// console.log(nums);

// Task 8
// let langs = ["Python", "JavaScript", "C++"];
// let index = langs.indexOf("JavaScript");
// console.log(index);

// Task 9
// let nums = [5, 12, 8, 130, 44];
// let result = nums.includes(8);
// console.log(result);

// Task 10
// let languages =  ["HTML", "CSS", "JS"] ;
// let joined = languages.join("-");
// console.log(joined);

// Task 11
// let nums = [1, 2, 3, 4, 5];
// let reversed = nums.reverse();
// console.log(reversed);

// Task 12
// let numbers = [40, 100, 1, 5, 25];
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// Task 13
// let nums = [1, 2, 3, 4];
// let mapped = nums.map(x => x * 2);
// console.log(mapped);

// Task 14
// let numbers = [10, 15, 20, 25, 30];
// let filtered = numbers.filter(x => x > 20);
// console.log(filtered);

// Task 15
// let numbers = [5, 12, 8, 130, 44];
// let result = numbers.find(x => x > 10);
// console.log(result);

// Task 16
// let numbers = [45, 60, 75, 90];
// let result = numbers.findIndex(x => x > 50);
// console.log(result);

// Task 17
// let numbers =  [5, 10, 15, 20] ;
// let sum = numbers.reduce ((a,b) => a + b);
// console.log(sum);

// Task 18
// let numbers = [1, 2, 3, 2, 1, 2] ;
// let result = numbers.lastIndexOf(2);
// console.log(result);

// Task 19
// let names = ["ali", "aysel", "mammad"];
// let uppercaseNames = names.map(name => name.toUpperCase());
// console.log(uppercaseNames);

// Task 20
// let objects =  [{name: "A", age: 16}, {name: "B", age: 22}, {name: "C", age: 19}];
// let filteredObjects = objects.filter(x => x.age >= 18);
// console.log(filteredObjects);

// Task 21
// let fruits =  ["Alma", "Banan", "Gilas", "Qarpız"] ;
// let splicedFruits = fruits.splice(1, 2);
// console.log(fruits);
// console.log(splicedFruits);

// Task 22
// let arr1 = [15, 40];
// let arr2 = [10, 30];
// let fullArray = arr1.concat(arr2);
// fullArray.sort((a, b) => a - b);
// console.log(fullArray);

// Task 23
// let numbers = [2, 3, 4] ;
// let result = numbers.reduce((a, b) => a * b);
// console.log(result);

// Task 24
// let arr = ["apple", "banana", "cherry", "date"];
// let result = arr.filter(item => item.includes("a"));
// console.log(result);

// Task 25
// let products = [
//     {name: "Körpük", price: 100},
//     {name: "Ayaqqabı", price: 200}
// ]
// let result = products.map(product => product.price * 1.18);
// console.log(result);

// Task 26
// let obj =  [
//         {id: 101, title: "Xəbər 1"}, 
//         {id: 102, title: "Xəbər 2"}
// ] 
// let result = obj.find(x => x.id === 102);
// console.log(result);

// Task 27
// let word = "javascript";
// let result = word.split("").reverse().join("");
// console.log(result);

// Task 28
// let nums = [10, 20, 30, 40, 50, 60];
// let result = nums.slice(-3);
// console.log(result);

// Task 29
// let nums = [12, 45, 2, 89, 34] ;
// let result = nums.reduce((max, num) => {
//     return num > max ? num : max;
// })
// console.log(result);

// Task 30
// let words = ["kitab", "qələm", "kompüter", "ev", "proqramlaşdırma"];
// let result = words.filter(item => item.length > 5 );
// console.log(result);

// Task 31
// const cart = [
//       { name: "Noutbuk", price: 1500, inStock: true },
//       { name: "Maus", price: 20, inStock: false },
//       { name: "Klaviatura", price: 80, inStock: true }
//     ];
//     const result = cart.filter(items => items.inStock === true).map(items => items.price).reduce((a,b) => {
//         return a+b 
//     })
//     console.log(result);

// Task 32
// let nums = [1, 2, 2, 3, 4, 4, 5, 1];
// let result = nums.filter((num, index) => {
//     return nums.indexOf(num) === index;
// })
// console.log(result);

// Task 33
    // const students = [
    //   { name: "Əli", grade: "A" },
    //   { name: "Leyla", grade: "B" },
    //   { name: "Aysel", grade: "A" }
    // ];
    // const result = students.reduce(()) ???????????

    // Task 34
    // let nums = [[3, 9], [1, 5], [10, 2]];
    // let nums.reduce (())??????????


// Task 35
    // let users = [
    //   { id: 1, name: "Əli", status: "pending" },
    //   { id: 2, name: "Leyla", status: "pending" },
    //   { id: 3, name: "Aysel", status: "pending" }
    // ];
    // let result = users.findIndex(items => items.id === 2).splice(users[1], 0, users.status = "approved");
    // console.log(result);  Error veroir??????
    
// Yaza bilmediklerim 33, 34, 35


    



