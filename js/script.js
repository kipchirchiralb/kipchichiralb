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


//OFFER - Saturdays and sundays . Free IT and POULTRY FARMING consultations

let d = new Date()

console.log(d.getDay)