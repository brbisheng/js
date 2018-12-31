
// data link - selector - #iframePriceHistory
// data link - Xpath - //*[@id="iframePriceHistory"]


// Step 1..
// ADD d3.
var add_d3 = function (){
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "https://d3js.org/d3.v5.min.js";
  document.head.appendChild(s);
};

// Step 2..
// SAVE table as data.

// empty array..
var dt = [];
// get table ..
var tb = document.getElementById("datalist").getElementsByTagName("tbody")[0];

var getData = function () {
  var dt = [];
  for (var i = 0, row; row = tb.rows[i]; i++) {
    //iterate through rows
    //rows would be accessed using the "row" variable assigned in the for loop
    dt.push([]);
    var j = 0;
    while (j < 3){
      dt[i].push(row.cells[j].textContent);
      j++;
   } 
}
  return dt;
} 
// save result
var dt = getData();



/*
References:
1. https://stackoverflow.com/questions/9413737/how-to-append-script-script-in-javascript

*/

 
