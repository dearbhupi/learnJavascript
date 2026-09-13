//Step 1: Get the clock element from the DOM
const clock = document.getElementById("clock");



setInterval(function (){

    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);




// // Step 2: Create a function to update the clock every second
// function updateClock() {
//   const now = new Date(); // Get the current date and time
//   const hours = now.getHours().toString().padStart(2, "0"); // Get the current hours and format it to 2 digits
//   const minutes = now.getMinutes().toString().padStart(2, "0"); // Get the current minutes and format it to 2 digits
//   const seconds = now.getSeconds().toString().padStart(2, "0"); // Get the current seconds and format it to 2 digits

//   clock.textContent = `${hours}:${minutes}:${seconds}`; // Update the clock element with the current time
// }

// setInterval(updateClock, 1000); // Step 3: Call the updateClock function immediately to display the time without waiting for 1 second
// updateClock();  // Call the updateClock function every second to keep the clock updated
