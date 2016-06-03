/*This file is for your custom js.  All yours*/

// Declare global variable for each vacation

var washingtonDC;
var newOrleans;
var ecuador;
var newZealand;
var newEngland;
var alaska;
var greece;
var japan;
var india;
var england;

// Function for capturing form input

$(function () {
  $("#vacation-questionnaire").submit(function(event) {
    event.preventDefault();

    // declare local variable for each question

    var season = $("input[name=season]:checked").val();
    var weather = $("input[name=weather]:checked").val();
    var duration = $("input[name=duration]:checked").val();
    var activities = $("input[name=activities]:checked").val();
    var budget = $("input[name=budget]:checked").val();

    // conditional statement incrementing each vacation variable given each question response

    //Question 1

    if (season === "spring") {
      washingtonDC += 1;
      newOrleans += 1;
      india += 1;
      japan += 1;
    }
    else if (season === "summer") {
      england += 1;
      greece += 1;
      alaska += 1;
    }
    else if (season === "fall") {
      washingtonDC += 1;
      newOrleans += 1;
      newEngland += 1;
      greece += 1;
      japan += 1;
      india += 1;
    }
    else {
      india += 1;
      newZealand += 1;
      ecuador += 1;
    }

    //Question 2

    if (weather === "hot") {
      newOrleans += 1;
      ecuador += 1;
      india += 1;
    }
    else if (weather === "cold") {
      newEngland += 1;
      alaska += 1;
    }

    else {
      washingtonDC += 1;
      newZealand += 1;
      greece += 1;
      japan += 1;
      england += 1;
    }

    //Question 3

    if (duration === "weekend") {
      washingtonDC += 1;
      newOrleans += 1;
      newEngland += 1;
    }

    else if (duration === "week") {
      washingtonDC += 1;
      newOrleans += 1;
      ecuador += 1;
      newEngland += 1;
      greece += 1;
      england += 1;
    }

    else {
      ecuador += 1;
      newZealand += 1;
      alaska += 1;
      greece += 1;
      japan += 1;
      india += 1;
    }

    //Question 4

    if (activites === "outdoor") {
      ecuador += 1;
      newZealand += 1;
      newEngland += 1;
      alaska += 1;
    }

    else if (activities === "cultural") {
      washingtonDC += 1;
      greece += 1;
      japan += 1;
      india += 1;
      england += 1;
    }

    else {
      newOrleans += 1;
      greece += 1;
      japan += 1;
    }

    //Question 5

    if (budget === "economy") {
      newOrleans += 1;
      ecuador += 1;
      newEngland += 1;
      alaska += 1;
      greece += 1;
      india += 1;
    }

    else {
      washingtonDC += 1;
      newZealand += 1;
      japan += 1;
      england += 1;
    }




});
