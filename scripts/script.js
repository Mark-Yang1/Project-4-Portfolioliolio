let cValue = 1;

function cIncrease() {
    cValue++;
    if (cValue > 3) {
        cValue = 1;
    };
    cCycle(cValue);
}

function cDecrease() {
    cValue--;
    if (cValue < 1) {
        cValue = 3;
    };
    cCycle(cValue);
}

function cCycle(x) {
    let a = document.getElementById('cIndex').className.toString();
    document.getElementById('cIndex').classList.remove(a);
    a = a.substring(0,(a.length - 1));
    document.getElementById('cIndex').classList.add(a + x)
    console.log(document.getElementById('cIndex').className);
}