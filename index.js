// total marks//
function calculateGrade() {
  // Get the input values and convert them to numbers
  var name = document.getElementById("name").value;
  var mark1 = Number(document.getElementById("python").value);
  var mark2 = Number(document.getElementById("javascript").value);
  var mark3 = Number(document.getElementById("html").value);
   // validation 
if(name==null || name==""){
  alert("please enter name");
  return;
}

  if (mark1 < 0 || mark1 > 100 || mark2 < 0 || mark2 > 100 || mark3 < 0 || mark3 > 100) {
    alert("Please enter marks between 0-100");
  	return;
			}

  // Calculate the total and average marks
  var total = mark1 + mark2 + mark3;
  var average = total / 3;
  
  // Determine the grade based on the average mark
  var grade;
  if (average > 79) {
    grade = "A";
  } else if (average >= 60 && average <= 79) {
    grade = "B";
  } else if (average >= 50 && average <= 59) {
    grade = "C";
  } else if (average >= 40 && average <= 49) {
    grade = "D";
  } else {
    grade = "E";
  }
  
  // Output the grade
  document.getElementById("gradeOutput").innerHTML = "Student grade is: " + grade;
  document.getElementById("totaloutput").innerHTML = "student total is:" + total;
  document.getElementById("avgoutput").innerHTML = "Student average is: " + average;
}