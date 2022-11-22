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


function bubbleSort(arr) {
    let comparation = 0;
    let swap = 0;
    let i, j;
    let len = arr.length;

    let isSwapped = false;

    for (i = 0; i < len; i++) {

        isSwapped = false;

        for (j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                comparation++;
                let temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;

            }
            swap++;
        }

        if (!isSwapped) {
            break;
        }
    }

    console.log(arr)
    console.log(`Quantidade de comparações: ${comparation}`)
    console.log(`Quantidade de trocas: ${swap}`)
}


let randomList = Array(100000).fill().map(() => Math.floor(Math.random() * Math.pow(1000, 2)))

let ascendingList = randomList.sort()

let descendingList = ascendingList.reverse()

bubbleSort(descendingList)


