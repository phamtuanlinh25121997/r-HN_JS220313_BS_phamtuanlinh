let month = prompt("Nhập tháng: ");
let year = prompt("Nhập năm: ");
let days;
if (month == 2) {
  if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {    
    alert("tháng có 29 ngày")
  } else {
    alert("tháng có 28 ngày")
  }
}
let day31 = [1, 3, 5, 7, 8, 10, 12];
let day30 = [4,6,9,11];
for(let i=0;i<day31.length;i++){
    if(month==day31[i]){
        alert("tháng có 31 ngày")
    }
}
for(let i=0;i<day30.length;i++){
    if(month==day30[i]){
        alert("tháng có 30 ngày")
    }
}

