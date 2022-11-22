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
let swapp = 0;

function swap(arr, i, j) {
	let temp = arr[i];  
	arr[i] = arr[j]; 
	arr[j] = temp;
    swapp+=3;

}


function partition(arr, low, high) {

	let pivot = arr[high];
	let i = (low - 1);
    swapp+=2;    

	for (let j = low; j <= high - 1; j++) {

        comparation++;
		if (arr[j] < pivot) {
            comparation++;
			i++;
			swap(arr, i, j);
		}
	}
	swap(arr, i + 1, high);
	return (i + 1);
}

function quickSort(arr, low, high) {
	if (low < high) {

        comparation++;

		let pi = partition(arr, low, high);

		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}
}

function printArray(arr, size) {
	for (let i = 0; i < size; i++)
		console.log(arr[i] + " ");
        console.log(`Quantidade de comparações: ${comparation}`)
        console.log(`Quantidade de trocas: ${swapp}`)
}


let randomList = Array(1000).fill().map(() => Math.floor(Math.random() * Math.pow(1000, 2)))

let ascendingList = randomList.sort()

let descendingList = ascendingList.reverse()

let n = randomList.length;
  
quickSort(randomList, 0, n - 1);
printArray(randomList, n);