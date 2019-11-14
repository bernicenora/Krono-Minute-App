
/* Styling using Javascript */

/* Container Styles */
var container = document.getElementById("container");
container.style.width="400px";
container.style.height="400px";
container.style.border="2px solid grey";
container.style.textAlign = "center";
container.style.boxShadow = "10px 20px 30px grey";

/* Heading Styles */
var heading = document.getElementById("heading");
heading.style.color="Green";
heading.style.textShadow="2px 2px 2px black";

/* Label Styles */
var minutes = document.getElementById("minutes");
minutes.style.color = "Green";
minutes.style.padding="10px";
minutes.style.fontSize="20px";

var kMinutes = document.getElementById("kMinutes");
kMinutes.style.color = "Green";
kMinutes.style.padding="10px";
kMinutes.style.fontSize="20px";
kMinutes.style.paddingBottom="20px";

/* Textbox Styles */
var minutesbox = document.getElementById("minutesVal");
minutesbox.style.padding = "5px";
minutesbox.style.color = "Green";
minutesbox.style.height = "35px";
var textbox=document.getElementById("textbox");
textbox.style.fontSize="18px";

/* Get the id of the calculate button */
var btn = document.getElementById("calculate");
/*regex to check if the number is between 1 and 59 */
var regex = /^([1-5][0-9]?)$/;

btn.onclick = function(){/* Validate the minutes entered */

var minutesVal= document.getElementById("minutesVal").value;

if (minutesVal==""){
    alert("Please enter minutes from 0 to 59!");
    return;
}else if(!minutesVal.match(regex)){
    alert("Please enter minutes from 0 to 59!");
    return;
}
/* Convert to Krono minutes */
var minuteKromo=minutesVal/60;
minuteKromo = minuteKromo.toFixed(1);
console.log(minuteKromo);
/*Styling the Span Element */
var kMinutesValspan = document.getElementById("kMinutesVal");
kMinutesValspan.style.fontSize="18px";
kMinutesValspan.style.color="Green";
var kMinutesValStyle = document.getElementById("kMinutesValStyle");
kMinutesValStyle.style.paddingBottom="20px";
/* Display the Krono minutes on the page */
kMinutesValspan.innerHTML = minuteKromo;
}

/* Get the id of the clear button */
var clearBtn = document.getElementById("clear");
clearBtn.onclick=function(){
    document.getElementById("minutesVal").value = "";
    var kMinutesValspan = document.getElementById("kMinutesVal");
    kMinutesValspan.innerHTML = "";
}