function f0() {
    var a = document.getElementsByClassName("static_table tbody_table static_tbody_table")[0].querySelectorAll('a');
    var b = [];

    for (let i=0; i<a.length; i++) {
        b.push(a[i].innerText);
    }
    console.log(b);
    return b;
}


function f1() {
    // get the tbody
    var a = document.querySelector('#tableWrap > div.table_templ_box.fixed_atomic_table_con > div > div.scroll_con_outer > div > div > div.scroll_tbody_con > table > tbody');
    var b = a.children;
    var result = [];
    for (let i = 0; i<b.length; i++) {
        result.push(b[i].children[9].innerText);
    }
    return result;


}
