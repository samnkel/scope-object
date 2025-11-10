let globalCount = 0;
function LocalScope() {
  let localVariable = 1;
  console.log( localVariable);
}
function modifyVariables() {
  console.log( localVariable);
  console.log( globalCount);
}
function Student(name, age, major) {
  this.name = name;
  this.age = age;
  this.major = major;
  this.greet = function() {
};
console.log( this.name, this.age, this.major);
}
const student1 = new Student("sam", 24, "Computer Science");
const student2 = new Student("Bora", 22, "software Engineering");
const student3 = new Student("Siza", 23, "data analysis");

const university = 
   {Schoolname: "life choices academy",
    location: "lawnsdowne road",

   lecturesname: "Mattew",
   classes: "class 1",

   lecturename: "Thyiesha",
   classes: "class 2",
   }
        
console.log(university)