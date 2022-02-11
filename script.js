function limpiar() {
    console.clear()
}

function primero() {

    x = document.getElementById("primero").value;
    for (let i = 1; i <= x; i++) {
        console.log(i)
    }

}

function segundo() {
    x = document.getElementById("segundo").value;
    for (let i = 1; i <= x; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

function tercero() {
    x = document.getElementById("tercero_1").value;
    y = document.getElementById("tercero_2").value;
    if (x > 0 && y > 0) {
        for (let i = x; i <= y; i++) {
            console.log(i)
        }
    }

}

function cuarto() {
    x = 100;

    for (let i = 1; i <= x; i += 5) {
        console.log(i)
    }
}

function quinto() {
    x = 200
    for (let i = 20; i <= x; i += 5) {
        console.log(i)
    }
}

function sexto() {
    x = document.getElementById("sexto").value;
    x=charAT(x.length()-1)
    x = parseInt(x)
    for (let i=1; i <= x; i++) {
       console.log(i)
    }

    

}

