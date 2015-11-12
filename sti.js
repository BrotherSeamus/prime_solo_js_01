var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var Employee = function (dude) {
	this.eName = dude[0];
	this.eNumber = dude[1];
	this.eSalary = dude[2];
	this.eRating = dude[3];
}

var employee1 = new Employee(atticus);
var employee2 = new Employee(jem);
var employee3 = new Employee(boo);
var employee4 = new Employee(scout);

var employees = [employee1, employee2, employee3, employee4];


function eEvaluation (workers) {
		var percent = 0;
		if (workers.eRating<=2){
			percent = 0;
		} else if (workers.eRating === 3) {
			percent = 4;
		} else if (workers.eRating===4){
			percent = 6;
		} else if (workers.eRating===5){
			percent = 10;
		}
		if (workers.eNumber.length === 4){
			percent += 5;
		}
		if (workers.eSalary > 65000){
			percent -= 1;
		}
		if (percent > 13) {
			percent = 13;
		}
		var bonus = Math.round(workers.eSalary * (percent/100));
		var compensation = parseInt(workers.eSalary) + bonus;
		var sti = {eName: workers.eName, ePercent: percent, eCompensation: compensation, eBonus: bonus}
		return sti
}

for (var i= 0; i< employees.length; i++) {
	console.log(eEvaluation(employees[i]));
}