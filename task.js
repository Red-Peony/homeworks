
// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity; 
  let sum = 0;
  let avg = 0;
      
  for (let i = 0; i < arr.length; i++) {
       
    if (arr[i] >= arr[i-1]) {
      max = arr[i];
    } else if ( arr [0] > arr[i] < arr[i+1]) {
      min = arr[i];
    } else if (arr[i] === arr[0]) {
      max = arr[i];
      min = arr[i];
    }
    sum += arr[i];
  }
  
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork (arrOfArr, vorker) {
  let max;
  let sumElements;
  for (let i = 0; i < arrOfArr.length; i++) {
    sumElements = worker(arrOfArr[i]);
    
    if (sumElements >= worker(arrOfArr[i-1])) {
      max = sumElements;
    } 
  }
  console.log(max);
  return max;
}
console.log('max ' + makeWork([1, 2, 3], [2, 4, 6], [3, 9, 12]));
// Задание 3
function worker2(arr) {
  // Ваш код
}
