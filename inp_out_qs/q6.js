var a = 10;
console.log("line number 2", a);  // 2 10
function fn() {
    console.log("line number 4", a); // 4 undef
    var a = 20;
    a++;
    console.log("line number 7", a); // 7 21
    if (a) {
        var a = 30;
        a++;
        console.log("line number 11", a);  // 11 31
    }
    console.log("line number 13", a); //13 31
}
fn();
console.log("line number 2", a); // 2 10