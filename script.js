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
    x = charAT(x.length() - 1)
    x = parseInt(x)
    for (let i = 1; i <= x; i++) {
        console.log(i)
    }



}

function septimo() {
    x = [[0, 1], [1, 1], [2, 1], [3, 1], [4, 2], [5, 2], [6, 2], [7, 2]]
    for (let i in x) {
        console.log(x[i])
    }
}

function octavo() {
    x = [[0, 1], [1, 1], [2, 2], [3, 2], [4, 3], [5, 3], [6, 4], [7, 4], [8, 5], [9, 5]]
    for(let i in x){
        console.log(x[i])
    }
}

function noveno(){
    x = [[ 1, 1, 1,], [2, 1, 2], [3, 1,3], [4, 2,1], [5,2,2 ], [6, 2,3], [7,3, 1], [8,3, 2], [9, 3,3]]
    for(let i in x){
        console.log(x[i])
    }
}



