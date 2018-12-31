
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

// ADD iframe.

var add_iframe = function (date0,date1,stock) {
  // ADD Iframe..
  var iframe_my = document.createElement("iframe");
  //iframe_my.id = "iframePriceHistory" + "ff";
  iframe_my.src = `http://market.finance.sina.com.cn/pricehis.php?symbol=${stock}&startdate=${date0}&enddate=${date1}`;
  iframe_my.frameborder = "0";
  iframe_my.style = "width:755px;height:500px;";
  document.body.appendChild(iframe_my);
}


// Step 2..
// SAVE table as data.

// empty array..
var dt = [];
// get table ..
var tb = document.getElementsByClassName("list")[0].getElementsByTagName("tbody")[0];
var thead = document.getElementsByClassName("list")[0].getElementsByTagName("thead")[0];
// document.getElementById("datalist").getElementsByTagName("tbody")[0];

var getData = function () {
  var dt = [];
  for (var i = 0, row; row = tb.rows[i]; i++) {
    //iterate through rows
    //rows would be accessed using the "row" variable assigned in the for loop
    dt.push([]);
    var j = 0;
    while (j < 3){
      var val = row.cells[j].textContent;
      if (j === 2) {val = +val.replace("%", "")}
      dt[i].push(+val);
      j++;
   } 
}
  return dt;
} 
// save result
var dt = getData();


/*
References:
1. append script
  - https://stackoverflow.com/questions/9413737/how-to-append-script-script-in-javascript
2. strip unnecessary strings.
  - https://stackoverflow.com/questions/1418050/string-strip-for-javascript
*/

 
