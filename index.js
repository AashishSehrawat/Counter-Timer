const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const counterTimerElement = document.querySelector(".counterTimer");
const heading = document.querySelector("h1");


const second = 1000,
    minute = 60 * second,
    hour = 60 * minute,
    day = 24 * hour;


const timerFunction = ()=>{

    let nowDate = new Date();
    let dd = String(nowDate.getDate()).padStart(2 , "0"),
    mm = String(nowDate.getMonth()+1).padStart(2 , "0"),
    yyyy = nowDate.getFullYear();

    

    const enterDay = prompt("Enter Day").padStart(2 , "0");
    const enterMonth = prompt("Enter Month").padStart(2 , "0");

    let targetDate = `${enterMonth}/${enterDay}/${yyyy}`;

    nowDate = `${mm}/${dd}/${yyyy}`;

    if(nowDate > targetDate){
        targetDate = `${enterMonth}/${enterDay}/${yyyy+1}`;
    }

    const intervalId = setInterval(() => {
    const birthday = new Date(targetDate).getTime();
    const today = new Date().getTime();

    const differnce = birthday - today;

    const leftDay = Math.floor(differnce/day);
    const leftHours = Math.floor((differnce%day)/hour);
    const leftMinute = Math.floor((differnce%hour)/minute);
    const leftSecond = Math.floor((differnce%minute)/second);

    daysElement.innerText = leftDay;
    hoursElement.innerText = leftHours;
    minutesElement.innerText = leftMinute;
    secondsElement.innerText = leftSecond;

    if(differnce < 0){
        counterTimerElement.style.display = "none";
        heading.innerText = "Time's Up";
        clearInterval(intervalId);
    }

    },0)

}

timerFunction();