//question 1

let text = '{ "employees" : [' +
'{ "firstName":"Sam" , "department":"Tech", "designantion":"Manager", "Salary":"40000","raise":"true"},' +
'{ "firstName":"Mary" , "department":"Finance", "designantion":"Trainee", "Salary":"18500","raise":"true"},' +
'{ "firstName":"Bill" , "department":"HR", "designantion":"Executive", "Salary":"21200","raise":"false"} ]}';

let data = JSON.parse(employees);

let employee1 = data.employees[0];
let employee2 = data.employees[1];
let employee3 = data.employees[2];

console.log("question 1: \n");
console.log("employee1:\n");
console.log("first name: " + employee1.firstName + ", department: " + employee1.department + ", designantion: " + employee1.designantion + ", salary: " + employee1.salary + ", raise: " + employee1.raise + ".");
console.log("employee2:\n");
console.log("first name: " + employee2.firstName + ", department: " + employee2.department + ", designantion: " + employee2.designantion + ", salary: " + employee2.salary + ", raise: " + employee2.raise + ".");
console.log("employee3:\n");
console.log("first name: " + employee3.firstName + ", department: " + employee3.department + ", designantion: " + employee3.designantion + ", salary: " + employee3.salary + ", raise: " + employee3.raise + ".");

//question 2




