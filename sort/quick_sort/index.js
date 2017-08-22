
/*
 快速排序方法
 思路：
 1. 找一个基准点，将一个数组分成两部分
 2. 将小于这个基数的 push 到左边，大于的 push 到右边
 3. 递归这个函数，即可
 4. concat左边的值，基准值，右边的值
 */

function quickSort(arr) {
  if (!(arr instanceof Array)) {
    return `Error, not array`;
  }
  if (arr.length <= 1) {
    return arr;
  }

  const pos = Math.floor(arr.length / 2);
  const middle = arr[pos];
  arr.splice(pos, 1);

  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < middle) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([middle], quickSort(right));
}


const quick_btn = document.getElementById('quick');

quick_btn.onclick = function () {
  const origin = document.getElementById('j-origin-array');
  const origin_array = JSON.parse(origin.innerHTML);
  document.getElementById('j-quick-result').innerHTML = quickSort(origin_array);
};

/*
  冒泡算法
  思路：第 n 个和第 n+1 个循环比较大小，进行排序
 */

function bubbleSort(arr) {
  if (!(arr instanceof Array)) {
    return `Error, not array`;
  }
  if (arr.length <= 1) {
    return arr;
  }
  for (let i = 0; i < arr.length; i ++) {
    for (let j = i + 1; j < arr.length; j ++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const result2 = bubbleSort([43, 3, 54, 21, 9]);
console.log(result2);