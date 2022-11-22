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

// Function to sort an array using insertion sort
let comparation = 0;
let swap = 0;
function insertionSort(arr, n) {
    let i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
            comparation++;
        }
        arr[j + 1] = key;
        swap++;
    }
    console.log(arr)
    console.log(`Quantidade de comparações: ${comparation}`)
    console.log(`Quantidade de trocas: ${swap}`)
}




let randomList = Array(100000).fill().map(() => Math.floor(Math.random() * Math.pow(1000, 2)))

let ascendingList = randomList.sort()

let descendingList = ascendingList.reverse()

let n = randomList.length;

insertionSort(randomList, n); 
