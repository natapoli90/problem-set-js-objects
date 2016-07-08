/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE
function daysUntilDate () {
var date1 = new Date();
var date2 = new Date(prompt("Please enter any date in mm/dd/yyyy format:"));

var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
alert(diffDays);
}




// birthday reminder
var data=[
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
 ] ;
for(var i=0; i<data[i].length; i++) {

var birthday = new Date(data[i].dob);}

var today = new Date();
//Set current year or the next year if you already had birthday this year
birthday.setFullYear(today.getFullYear());
if (today > birthday) {
  birthday.setFullYear(today.getFullYear() + 1);
}

//Calculate difference between days
var diffDays=Math.floor((birthday - today) / (1000*60*60*24));

console.log(data[i].name+"\'s birthday is in "+diffDays);
