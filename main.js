var Bus = require("./bus.js");
var Student = require("./student.js");
var prompt = require('prompt');

var myBus = new Bus("Michael", "red", "full");

prompt.start();
prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result){

myBus.studentEntersBus("Paul","M","A",4.0,4,true,"Paul 4.0 4");
myBus.studentEntersBus("Paula","F","D",1.1,14,true,"Paula 1.1 14");
myBus.studentEntersBus("Bill","M","A",4.0,14,true,"Bill 4.0 14");
myBus.studentEntersBus("Pete","M","D",1.2,4,true,"Pete 1.4 4");
myBus.studentEntersBus("Barb","F","A",4.0,4,true,"Barb 4.0 4");
myBus.studentEntersBus("Brian","M","B",3.3,4,true,"Brian 3.3 4");
myBus.studentEntersBus("Katie","F","C",2.5,14,true,"Katie 2.5 14");
myBus.studentEntersBus("Larry","M","D",1.6,9,true,"Larry 1.6 9");
myBus.studentEntersBus("Alice","F","B",3.7,11,true,"Alice 3.7 11");
myBus.studentEntersBus("Rachel","F","A",4.0,1,true,"Rachel 4.0 1");



var myStudent = new Student();

myBus.studentEntersBus(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);
var studentArray = myBus.studentsOnTheBus;
for (var i = 0; i < studentArray.length; i++) {
    var detentions = studentArray[i].detentions;
    var gpa = studentArray[i].GPA;
    var cp = studentArray[i].catchPhrase;
    myStudent.canStudentHaveFun(detentions,gpa,cp); 
    myBus.busChatter(detentions,gpa,cp);
}

});
