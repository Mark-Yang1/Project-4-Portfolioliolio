let cValue = 1;

function cIncrease() {
    cValue++;
    if (cValue > 3) {
        cValue = 0;
    };
    cCycle(cValue);
}

function cDecrease() {
    cValue--;
    if (cValue < 0) {
        cValue = 3;
    };
    cCycle(cValue);
}

function cCycle(x) {
    let a = document.getElementById('cIndex').className.toString();
    let b = a.length;
    a = a.substring((b - 1));
    document.getElementById('cIndex').className = a + x;
}