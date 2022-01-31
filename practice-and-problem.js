// use to array/function/loop/condition in on solution
let num = [];
num.push(20,25,26,35);
num.unshift(28,30);
let SumArray = 0;
for(i = 0;i < num.length;i++){
    let collectNumber = num[i];
    PulsArray = PulsArray + num[i];
    console.log(collectNumber);
}
console.log(PulsArray);
function oddEvenArrayCollection(PulsArray){
    if(PulsArray % 2 == 0){
        return "This Array is 'Even'";
    }
    if(PulsArray % 2 == 1){
        return "This Array is 'Odd'";
    }
}
let result = oddEvenArrayCollection(PulsArray);
console.log(result);

// celsius to fahrenheit;
//তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 
function celsiusToFahrenheit(celsiusNumber)
{
    let fahrenheit = (celsiusNumber * 9/5) + 32;
    return fahrenheit;
}
let celsiusNumber = 100;
let farhrenheitResult = celsiusToFahrenheit(celsiusNumber);
console.log(celsiusNumber,"celsius = ",farhrenheitResult,"farhrenheit");

// farhrenheit to celsius;
//একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 
function farhrenheitToCelsius(farhrenheit){
    let celsiusResult = (farhrenheit - 32) * 5/9;
    return celsiusResult;
}
let farhrenheitNumber = 50;
let celsiusResult = parseFloat(farhrenheitToCelsius(farhrenheitNumber).toFixed(4));
console.log(farhrenheitNumber,"farhrenheit = ",celsiusResult,"celsius");

// exam grade solution;
//কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 
function examGradeExecute(Marks){
    let Grade;
    if(Marks >= 80 && Marks < 100){
        Grade = "A+";
    }
    else if(Marks >= 70 && Marks < 80){
        Grade = "A";
    }
    else if(Marks >= 60 && Marks < 80){
        Grade = "A-"
    }
    else if(Marks >= 40 && Marks < 60){
        Grade = "B"
    }
    else{
        Grade = "F"
    }
    return Grade
}
let allMarksParsentige = 80;
let gradeResult = examGradeExecute(allMarksParsentige);
console.log("My Grade is",gradeResult);

// solution in interest;
// সুদের হিসাব;
function totalInterest(money,times){
    let interest = (money * times * 0.9) /100;
    return interest;
}
let money = 3000000;
let month = 1;
let interestResult = totalInterest(money,month);
let dicscription = money + " Taka " + month + " month " + " intarest to " + interestResult + " Taka "
console.log(dicscription);
// extra practice;
// write to object and practice object;
let myPc = {
    Proccssore: "ryzon 5 3400G",
    Ram: "16 GB",
    storage: "250 GB",
    MotherBoard: "Gigabyte M450 v2",
    Monitor: "lg 220000k",
    color: "Black",
    lovepc: ['Mother','Brother','Sister','Me']
}
//how to delire any object;
let love = myPc.lovepc[0];
let changeRam = myPc.Ram = "32 GB"
let changeProccssore = myPc["Proccssore"] = "intel i5 11000k"
let changeMonitor = "Monitor";
myPc[changeMonitor] = "asus 144 HZ Monitor"
console.log(myPc.Monitor);
console.log(changeProccssore);
console.log(love);

// তিনটা সংখ্যা এর যোগ করতে পারবে এমন একটা ফাংশন লিখো 
function threeSum(threeNumber){
    let toSumResult = 0;
    for(i = 0; i<threeNumber.length;i++){
        toSumResult = toSumResult + threeNumber[i];
    }
    return toSumResult;
}
let threeNumber = [20,30,40];
let sumResult = threeSum(threeNumber);
console.log("Three number of Sum result is = ",sumResult);
