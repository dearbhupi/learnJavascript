// Step 1: grab the form and result elements from the HTML file
const form = document.querySelector("form");
const results = document.querySelector("#results");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page

    const weightInput = document.querySelector("#weight");
    const heightInput = document.querySelector("#height");

    const weight = parseFloat(weightInput?.value || "");
    const heightCm = parseFloat(heightInput?.value || "");

    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
      results.innerHTML = "Please enter valid positive numbers for weight and height.";
      return;
    }

    const heightInMeters = heightCm / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    results.innerHTML = `Your BMI is ${bmi}`;
  });
}

























// const weightInput = document.getElementById("weight");
// const heightInput = document.getElementById("height");
// const calculateBtn = document.getElementById("calculateBtn");
// const resultDiv = document.getElementById("result");

// // Step 2 add event listener to the button
// calculateBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   // Step 3 get the values from the input fields
//   const weight = parseFloat(weightInput.value);
//   const height = parseFloat(heightInput.value);

//   // Step 4 calculate the BMI
//   const bmi = weight / (height * height);

//   // Step 5 display the result
//   resultDiv.innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
// });