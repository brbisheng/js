var a = document.getElementsByClassName("static_table tbody_table static_tbody_table")[0].querySelectorAll('a');
var b = [];

for (let i=0; i<a.length; i++) {
    b.push(a[i].innerText);
}
console.log(b);
