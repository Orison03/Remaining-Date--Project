const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-format h4")

let tempDate = new Date(2023,11,25,12,30,0)
let tempYear = tempDate.getFullYear()
let tempMonth = tempDate.getMonth()
let tempDay = tempDate.getDay()

// let futureDate = new Date(2022,11,25,12,30,0);
// console.log(futureDate);
// let month = futureDate.getMonth()
// console.log(month);
// let arrayMonth = months[9]
// month = arrayMonth

// console.log(month);
const futureDate = new Date(tempYear,tempMonth,tempDay + 10, 12,30,0)
const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()
const date = futureDate.getDate()
const weekday = weekdays[futureDate.getDay()];

let month = futureDate.getMonth()
month = months[month]
// console.log(month);

giveaway.textContent = `giveaway ends ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`

//future time in ms
const futureTime = futureDate.getTime()
// console.log(futureTime);

function getRemainingTime(){
   const today = new Date().getTime()
  //  console.log(today);
  const t = futureTime - today
  console.log(t);

  // values in mill-secs
  const oneDay = 24*60*60*1000
  const oneHour = 60*60*1000
  const oneMinute =60*1000

  // calculate all values
  let days = t/oneDay
  days = Math.floor(days)
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour)/oneMinute)
  let seconds = Math.floor((t % oneMinute) / 1000)

  // set values array
  const values = [days,hours,minutes,seconds]

  function format(item){
    if(item < 10){
      return item = `0${item}`
    }
    else{
      return item
    }
  }

  items.forEach(function(item,index){
   item.innerHTML = format(values[index]);
  })
  if(t<0){
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
  }
}
//countdown
let countdown = setInterval(getRemainingTime,1000)
getRemainingTime()
