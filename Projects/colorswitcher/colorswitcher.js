// step 1 lets import the buttons from html file

const btn = document.querySelectorAll(".button");
const body = document.querySelector("body");

// step 2 lets add event listener to each button
// btn.forEach((button) => {
//   button.addEventListener("click", () => {
//     // step 3 lets get the color from the button
//     const color = button.dataset.color;
//     // step 4 lets change the background color of the body
//     body.style.backgroundColor = color;
//   });
// });

// step 2 lets add event listener to each button
btn.forEach((button) => {
  button.addEventListener("click", function (e) {
   
    //const color = e.target.dataset.color;
    // step 4 lets change the background color of the body
    
     // step 3 lets get the color from the button and assign it the background color of the body
     if (e.target.id==='grey'){
        body.style.backgroundColor = e.target.id;
    }
     if (e.target.id==='blue'){
        body.style.backgroundColor = e.target.id;
    }
     if (e.target.id==='yellow'){
        body.style.backgroundColor = e.target.id;
    }
     if (e.target.id==='red'){
        body.style.backgroundColor = e.target.id;
    }
     if (e.target.id==='grey'){
        body.style.backgroundColor = e.target.id;
    }
    if (e.target.id==='white'){
        body.style.backgroundColor = e.target.id;
    }
  });
});