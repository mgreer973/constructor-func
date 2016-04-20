var Student = require("./student.js")

function Bus(driverName,color,gas) {
	this.studentsOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas   = gas;                
	this.studentEntersBus = function (n, g, gr, GPA, d, s, c){
  	this.studentsOnTheBus.push(new Student(n, g, gr, GPA, d, s, c));
}
	this.busChatter = function(detentions,gpa,cp) {
		if ((detentions < 10) && (gpa > 2)) {
			console.log(cp);
		}
	}
}

module.exports = Bus;