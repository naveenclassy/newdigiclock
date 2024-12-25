//js for switch btn
const formatSwtichbtn = document.querySelector(".format-switch-btn");
formatSwtichbtn.addEventListener("click", () => {
    formatSwtichbtn.classList.toggle("active");
    var formatValue = formatSwtichbtn.getAttribute("data-format");
    if (formatValue === "12") {
        formatSwtichbtn.setAttribute("data-format", "24");
    }
    else {
        formatSwtichbtn.setAttribute("data-format", "12");
    };
})
//js for clock time and date
let hours = document.querySelector(".hour");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let months = document.querySelector(".month");
let days = document.querySelector(".day");
let dates = document.querySelector(".date");
let years = document.querySelector(".year");
let periods = document.querySelector(".period");

//set time 
function timedateyear() {
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let period = "am"

    if (hrs >= 12) {
        period = 'PM'
    }
    var formatValue = formatSwtichbtn.getAttribute("data-format");
    if (formatValue === "12") {
        hrs = hrs > 12 ? hrs % 12 : hrs;
    }



    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }

    hours.innerHTML = hrs;
    minutes.innerHTML = mins;
    seconds.innerHTML = secs;
    periods.innerHTML = period;
}
timedateyear();
setInterval(timedateyear, 1000);
//set date and year
let time = new Date();
let month = time.toLocaleString("default", { month: "short" });
let day = time.toLocaleString("default", { weekday: "long" });
let date = time.getDate();
let year = time.getFullYear();
months.innerHTML = month;
days.innerHTML = day;
dates.innerHTML = date;
years.innerHTML = year;
//js for dot menu
const dotmenubtn = document.querySelector(".menu-img");
const dotmenu = document.querySelector(".dot-menu");
dotmenubtn.addEventListener("click", () => { dotmenu.classList.toggle("active") })
document.addEventListener("click", (e) => {
    if (e.target.id !== "active-menu") {
        dotmenu.classList.remove("active");
    }
})
