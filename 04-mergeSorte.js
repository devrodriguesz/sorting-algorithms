function tempoDecorrido() {

    let fim = new Date().getTime();

    let tempo = fim - inicio;

    console.log(`Tempo de execução: ${tempo}ms`);
}

let inicio;

function time() {

    inicio = new Date().getTime();

    setTimeout(tempoDecorrido, 1000);
}

time();

let comparation = 0;
let swap = 0;

function merge(arr, l, m, r) {
    let n1 = m - l + 1;
    let n2 = r - m;

    // Create temp arrays
    let L = new Array(n1);
    let R = new Array(n2);

    for (let i = 0; i < n1; i++){
        L[i] = arr[l + i];
        comparation++;
    }

    for (let j = 0; j < n2; j++){
        R[j] = arr[m + 1 + j];
        comparation++;
    }


    let i = 0;

    let j = 0;

    let k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
            comparation++;
        }
        else {
            arr[k] = R[j];
            j++;
            comparation++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
        swap++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
        swap++;
    }
}

function mergeSort(arr, l, r) {
    if (l >= r) {
        return;
    }
    let m = l + parseInt((r - l) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
}

function printArray(A, size) {
    for (let i = 0; i < size; i++)

    console.log(A[i] + " ");
    console.log(`Quantidade de comparações: ${comparation}`)
    console.log(`Quantidade de trocas: ${swap}`)
}



let randomList = Array(1000).fill().map(() => Math.floor(Math.random() * Math.pow(1000, 2)))

let ascendingList = randomList.sort()

let descendingList = ascendingList.reverse()

let arr_size = randomList.length;

mergeSort(randomList, 0, arr_size - 1);
printArray(randomList, arr_size);

