const timeDiv = document.getElementById("clock");


function getTime() {
  let now = new Date();
  let hour = now.getHours(); //0-23시
  let minute = now.getMinutes(); //0-59분
  let second = now.getSeconds(); //0-59초
  let noon = "오전";
  if (hour > 11) {
    noon = "오후";
    hour = hour - 12;
    if (hour == 0) {
      hour = 12;
    }
  }


  timeDiv.textContent =
    noon +
    " " +
    formatNumber(hour) +
    ":" +
    formatNumber(minute) +
    ":" +
    formatNumber(second);
}


const timeDate = document.getElementById("date")


function getDate() {
  let today = new Date();
  let year = today.getFullYear();//0-10000000000000000000000000000000000000000000000000000000000년
  let month = today.getMonth();//0-11일
  let date = today.getDay();//0-31
  var week_array = new Array('일', '월', '화', '수', '목', '금', '토');

    var today_num = new Date().getDay();

    if (month >= 0) {
    month = month+1
   
   }
 
   
   
  timeDate.textContent =
  formatNumber(year) + 
  "년  " + 
  formatNumber(month) + 
  "월  " + 
  formatNumber(date) + 
  "일  " + 
  formatNumber(week_array[today_num]) + 
  "요일  ";
}

getTime();
getDate();
setInterval(getTime, 1000);


function formatNumber(num) {
  if (num < 10) {
    return "0" + num;
  }
  return num;
}

function changeBackground(color) {
  document.body.style.background = color;
}

window.addEventListener("load",function() { changeBackground('black') });
