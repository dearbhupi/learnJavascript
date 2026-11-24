const password=document.getElementById("password");
const strengthBar=document.getElementById("strength-bar");
const strengthText=document.getElementById("strength-text");

password.addEventListener("input",function(){
    const passwordValue=password.value;
    const strength=checkStrength(passwordValue);
    updateStrengthBar(strength);
});

function checkStrength(password){
    let strength=0;
    if(password.length>=8) strength++;
    if(/[@#$%&!]/.test(password)) strength++;
    if(/[0-9]/.test(password)) strength++;
    if(/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
}

function updateStrengthBar(strength){
    switch(strength){
        case 0:
            strengthBar.style.width="0%";
            strengthBar.style.backgroundColor="red";
            strengthText.textContent="Very Weak";
            break;
        case 1:
            strengthBar.style.width="25%";
            strengthBar.style.backgroundColor="orange";
            strengthText.textContent="Weak";
            break;
        case 2:
            strengthBar.style.width="50%";
            strengthBar.style.backgroundColor="yellow";
            strengthText.textContent="Moderate";
            break;
        case 3:
            strengthBar.style.width="75%";
            strengthBar.style.backgroundColor="lightgreen";
            strengthText.textContent="Strong";
            break;
        case 4:
            strengthBar.style.width="100%";
            strengthBar.style.backgroundColor="green";
            strengthText.textContent="Very Strong";
            break;
    }
}