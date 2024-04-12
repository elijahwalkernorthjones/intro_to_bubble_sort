// [5,2,7,4,1] --> [1,2,4,5,7]

/* 
    - Loop with ***i*** from end of array towards beginning
    - Loop with ***j*** from the beginning until ***i - 1***
    - If ***arr[j]*** is greater than ***arr[j+1]***, swap those two values!
    - Return the sorted array
    - This technique is called Bubble Sort. Why?
    - Because the big numbers bubble to the top!
*/ 

function bubbleSort(arr){
    for (let i = arr.length - 1; i > 0; i--){
        for (let j = 0; j < i; j++){
            console.log(arr);
            if (arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}