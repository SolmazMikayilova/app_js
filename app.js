
//task1
/*let numbers=[17,8,12,42,47,27];
numbers.sort((a,b) => a-b);
console.log(numbers); 
//or
let numbers = [17,8,12,42,47,27];
for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] > numbers[j]) {
      let first = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = first;
    }
  }
}

console.log(numbers); */



//task3

/*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n=5;

let start = 0;
let end = numbers.length - 1;
let index = -1;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  if (numbers[mid] === n) {
    index = mid;
    break;
  } else if (numbers[mid] < n) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(index); */





//task2
/*const list1 = [1, 2, 3];
const list2 = [2, 3, 4, 1, 5];


for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
        if (list1[i] === list2[j]) {
            break;

        }
    }
}
console.log(true); */