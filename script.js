const lengthSlider = document.querySelector(".pass-length input"),
    options = document.querySelectorAll(".option input"),
    passwordinput = document.querySelector(".display input"),
    copy = document.querySelector(".display span"),
    passwordindicator = document.querySelector(".pass-indicator"),
    generatebtn = document.querySelector(".btn-generate");

const charcterAll = {
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    Symbol: "!@#$%^&*(){}+=<>?/-_"
}

//generate the password
const generatepass = () => {
    let staticPasword = "",
        ramdompass = "",
        passlength = lengthSlider.value;

    options.forEach(option => { //looping 
        if (option.checked) { //if input box is checked 
            staticPasword += charcterAll[option.id];
        }
    });

    for (let i = 0; i < passlength; i++) {
        ramdompass += staticPasword[Math.floor(Math.random() * staticPasword.length)];
    }
    console.log(ramdompass);
    passwordinput.value = ramdompass;
}

const updatepassindicator = () => {
    //ternary operator
    passwordindicator.id = lengthSlider.value <= 10 ? "weak" : lengthSlider.value <= 15 ? "medium" : "strong";
}
//update the length of the (range) password indicator acc. to the value
const updateSlider = () => {
    //getting the slider value
    document.querySelector(".pass-length span").innerText = lengthSlider.value;
    updatepassindicator();

}
updateSlider();

const copypassword = () => {
    navigator.clipboard.writeText(passwordinput.value); //writetext pass the write text to the system clipboard 
    copy.innerText = "copied";
    
}
copy.addEventListener("click", copypassword);
lengthSlider.addEventListener("input", updateSlider);
generatebtn.addEventListener("click", generatepass)
