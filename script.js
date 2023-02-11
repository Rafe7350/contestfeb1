/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log

  arr.map(PrintStudentswithMap); 
 
  function PrintStudentswithMap(arrayItem) {
    if (arrayItem.profession === "student") {
      console.log(arrayItem);
    }
  }

}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log

  arr.forEach(PrintStudentsbyForEach); 
 
  function PrintStudentsbyForEach(arrayItem) {
    if (arrayItem.profession === "students") {
      console.log(arrayItem);
    }
  }

}

function addData() {
  //Write your code here, just console.log

  let newObj = {  id: 4, name: "joy", age: "21", marks: 65 };
  arr.push(newObj);
  console.log(arr);

}

function removeFailedStudent() {
  //Write your code here, just console.log

  let filtered_arr = arr.filter(function (val) {
    //callback function
    if (val.profession !== "FailedStudent") {
      //filtering criteria
      return val;
    }
  });
  console.log(filtered_arr);


}

function concatenateArray() {
  //Write your code here, just console.log

  let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
 
  let concatArray = arr.concat(arr2);
  console.log(concatArray);


}
