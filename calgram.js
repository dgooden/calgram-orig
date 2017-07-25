function gocalc() {
  var total_calories = document.getElementById("total_calories").value;
  var total_grams = document.getElementById("total_grams").value;
  var wanted_calories = document.getElementById("wanted_calories").value;
  var wanted_grams = document.getElementById("wanted_grams").value;

  var final_grams = 0;
  var final_calories = 0;
  var gram_per_cal = total_grams / total_calories;
  var cal_per_gram = total_calories / total_grams;

  if (typeof wanted_calories !== "undefined" && wanted_calories) {
    final_grams = wanted_calories * gram_per_cal;
    final_calories = wanted_calories;
  }
  if (typeof wanted_grams !== "undefined" && wanted_grams) {
    final_grams = wanted_grams;
    final_calories = wanted_grams * cal_per_gram;
  }

  document.getElementById('results').innerHTML = "Final Calories: " + final_calories + "<br>Final Grams: " + final_grams;
  return;
}