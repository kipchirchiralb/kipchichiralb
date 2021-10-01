let dropdownMenu = document.querySelector(".dropdown-menu");
let dropdownBtn = document.querySelector(".dropdown-icon");
dropdownBtn.addEventListener("click", showDropdownMenu);
let counter = 1;

function showDropdownMenu() {
    counter++;
    if (counter % 2 == 0) {
        dropdownMenu.classList.add("clicked");
        dropdownBtn.classList.add("change");
        console.log("Btn even clicked");
    } else {
        dropdownMenu.classList.remove("clicked");
        dropdownBtn.classList.remove("change");
        console.log("Btn odd clicked");
    }
}


// Quick action buttons
const callMeBtn = document.getElementById("call-me")
const sendMessageBtn = document.getElementById("sms-me")
const emailMeBtn = document.getElementById("email-me")

callMeBtn.addEventListener("click", function() {
    document.location.href = "tel:+254717481718"
})

sendMessageBtn.addEventListener("click", function() {
    document.location.href = "sms:+254717481718"
})
emailMeBtn.addEventListener("click", function() {
    document.location.href = "mailto:albertkipchirchir02@gmail.com"
})