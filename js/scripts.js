$(function () {
  $("form#vacation-questionnaire").submit(function(event) {
    event.preventDefault();

    var washingtonDC = 0;
    var newOrleans = 0;
    var ecuador = 0;
    var newZealand = 0;
    var newEngland = 0;
    var alaska = 0;
    var greece = 0;
    var japan = 0;
    var india = 0;
    var england = 0;

    var season = $("input[name=season]:checked").val();
    var weather = $("input[name=weather]:checked").val();
    var duration = $("input[name=duration]:checked").val();
    var activities = $("input[name=activities]:checked").val();
    var budget = $("input[name=budget]:checked").val();

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

    if (activities === "outdoor") {
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

    if (washingtonDC >= newOrleans && washingtonDC >= ecuador && washingtonDC >= newZealand && washingtonDC >= newEngland && washingtonDC >= alaska && washingtonDC >= greece && washingtonDC >= japan && washingtonDC >= india && washingtonDC >= england) {
      $("#vacation-questionnaire-carousel").carousel(5);
    }
    else if (newOrleans >= ecuador && newOrleans >= newZealand && newOrleans >= newEngland && newOrleans >= alaska && newOrleans >= greece && newOrleans >= japan && newOrleans >= india && newOrleans >= england) {
      $("#vacation-questionnaire-carousel").carousel(6);
    }
    else if (ecuador >= newZealand && ecuador >= newEngland && ecuador >= alaska && ecuador >= greece && ecuador >= japan && ecuador >= india && ecuador >= england) {
      $("#vacation-questionnaire-carousel").carousel(7);
    }
    else if (newZealand >= newEngland && newZealand >= alaska && newZealand >= greece && newZealand >= japan && newZealand >= india && newZealand >= england) {
      $("#vacation-questionnaire-carousel").carousel(8);
    }
    else if (newEngland >= alaska && newEngland >= greece && newEngland >= japan && newEngland >= india && newEngland >= england) {
      $("#vacation-questionnaire-carousel").carousel(9);
    }
    else if (alaska >= greece && alaska >= japan && alaska >= india && alaska >= england) {
      $("#vacation-questionnaire-carousel").carousel(10);
    }
    else if (greece >= japan && greece >= india && greece >= england) {
      $("#vacation-questionnaire-carousel").carousel(11);
    }
    else if (japan >= india && japan >= england) {
      $("#vacation-questionnaire-carousel").carousel(12);
    }
    else if (india >= england) {
      $("#vacation-questionnaire-carousel").carousel(13);
    }
    else {
      $("#vacation-questionnaire-carousel").carousel(14);
    }
  });
});
