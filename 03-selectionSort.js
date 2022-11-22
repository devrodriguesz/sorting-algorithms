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

function swap(arr, xp, yp) {
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

function selectionSort(arr, n) {
    let comparation = 0;
    let swapp = 0;

    let i, j, min_idx;

    for (i = 0; i < n - 1; i++) {

        min_idx = i;
        for (j = i + 1; j < n; j++)
            comparation++;

        if (arr[j] < arr[min_idx])
            min_idx = j;

        swap(arr, min_idx, i);
        swapp++;

    }
    console.log(arr)
    console.log(`Quantidade de comparações: ${comparation}`)
    console.log(`Quantidade de trocas: ${swapp}`)
}



let randomList = Array(1000).fill().map(() => Math.floor(Math.random() * Math.pow(1000, 2)))

let ascendingList = randomList.sort()

let descendingList = ascendingList.reverse()

let n = randomList.length;

selectionSort(randomList, n);


