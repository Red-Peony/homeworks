
// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity; 
  let sum = 0;
  let avg = 0;
      
  for (let i = 0; i < arr.length; i++) {
       
    if (max < arr[i]) {
      max = arr[i];
    } 
    
    if ( min > arr[i]) {
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

function makeWork (arrOfArr, func) {
  let max = 0;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    const nozzle = func(arrOfArr[i]);
    if (max < nozzle) {
      max = nozzle;
    } 
  }
  console.log(max);
  return max;
}
console.log('max: ' + makeWork([[1, 2, 3], [2, 4, 6], [3, 9, 12]], worker));

// Задание 3
function worker2(arr) {
  let min = Infinity;
  let max = -Infinity; 
  let difference = 0;
        
  for (let i = 0; i < arr.length; i++) {
       
    if (max < arr[i]) {
      max = arr[i];
    } 
    
    if ( min > arr[i]) {
      min = arr[i];
    }
    
    difference = max - min;
  }
  
  return Math.abs(difference);
}


