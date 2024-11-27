let student = {                             //student object
    name: "Merle",
    age: 94,
    maritalStatus: "Widowed",
    onlineLearning: true,
    enrolled: true,
    courses: ['math', 'science', 'art', 'python', 'javascript'],
    displayInfo: function() {
        console.log("Name: " + this.name  + "\nAge: " + this.age + "\nenrolled: " + this.enrolled + "\nenrolled in distance learning: " + this.onlineLearning);
    }
};

console.log(student.name, student.age);
student.displayInfo();


let jsonStudent = JSON.stringify(student);                //converting object into JSON

console.log(jsonStudent);

let backToJS = JSON.parse(jsonStudent);                   //converting JSON object back to Javascript

console.log(backToJS.name, backToJS.age);


let scores = [90, 87, 68, 95, 86, 88, 74, 80, 92, 75];