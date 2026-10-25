// Student Information

let firstname = "Chimezie";
let lastname = "Anorue";

let mathematics = 75;
let english = 68;
let biology = 55;

// Calculate Total Score

let TotalScore = mathematics + english + biology;

// calculate Average

let AverageScore = TotalScore / 3;

// Determine Remark

let remark;

if (AverageScore >=70) {
    remark = "Excellent";
} else if (AverageScore >= 50) {
    remark = "Good";
} else if (AverageScore >= 35) {
    remark = "You can do better";
} else {
    remark = "Fail";
}

// Display Result

console.log("Student Name: " + firstname + " " + lastname);
console.log("Mathematics: " + mathematics);
console.log("English: " + english);
console.log("Biology: " + biology);
console.log("Total Score: " + TotalScore);
console.log("Average Score: " + AverageScore);
console.log("Remark: " + remark);