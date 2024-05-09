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

// SPLIT: NAVIGATION STUFF

function openNav() {
    document.getElementById('nav').style.height = "100%";
}
  
function closeNav() {
    document.getElementById('nav').style.height = "0%";
}

// SPLIT: ABOUT STUFF

function activateRight1() {
    let a = document.getElementById('aboutRight1')
    if (a.style.width = '0') {
        a.style.width = '50%';
        a.style.whiteSpace = 'normal';
        a.style.border = 'solid gray 7.5px';
        a.style.borderRadius = '30px';
        a.style.margin = '1.5%';
        a.style.overflow = 'auto'
    } else if (a.style.width = '50%') {
        a.style.width = '0';
    }
}

function activateRight2() {
    let a = document.getElementById('aboutRight2')
    if (a.style.width = '0') {
        a.style.width = '50%';
        a.style.whiteSpace = 'normal';
        a.style.border = 'solid gray 7.5px';
        a.style.borderRadius = '30px';
        a.style.margin = '1.5%';
        a.style.overflow = 'auto'
    } else if (a.style.width = '50%') {
        a.style.width = '0';
    }
}

function activateRight3() {
    let a = document.getElementById('aboutRight3')
    if (a.style.width = '0') {
        a.style.width = '50%';
        a.style.whiteSpace = 'normal'
        a.style.border = 'solid gray 7.5px';
        a.style.borderRadius = '30px';
        a.style.margin = '1.5%';
        a.style.overflow = 'auto'
    } else if (a.style.width = '50%') {
        a.style.width = '0';
    }
}

// border: solid gray 7.5px;
// padding: 7.5px;
// border-radius: 30px;