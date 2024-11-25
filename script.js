let student = {
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