const endDay = "31 December 2023 10:30 PM"
document.getElementById("end-date").innerHTML=endDay;

const input = document.querySelectorAll("input") // use for select all input 

function clock(){
    const end = new Date(endDay);
    const now = new Date();
    const diff  = (end - now) / 1000;

    if(diff < 0 ) return;


  input[0].value=  Math.floor(diff /3600/ 24);   // This is use for the Day Conversion from mili second

  input[1].value = Math.floor(diff / 3600) % 24;

  input[2].value= Math.floor(diff / 60 ) % 60;

  input[3].value = Math.floor(diff ) %  60;
}

clock()

setInterval (
    () =>{
        clock();
    },
    1000
)