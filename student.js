var Bus = require("./bus.js");
var Main = require("./main.js");

function Student(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){
  this.name = name;
  this.gender = gender,
  this.grade = grade;
  this.GPA = GPA;
  this.detentions = detentions
  this.sleepingInClass = sleepingInClass;
  this.catchPhrase = catchPhrase;

  this.canStudentHaveFun = function(detentions,gpa,cp ){
    if ((detentions < 10) && (gpa > 2)) {
      console.log("student can have fun");
  //    myBus.busChatter(cp);
    } 
  }
}

module.exports = Student;
