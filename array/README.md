### 数组去重

```
const array = [1, 4, 2, 4, 6, 3, 2];
  //传统方法
  function removalArr(arr) {
    if (!arr) return [];
    if (arr && arr.length < 2) return arr;
    const result = [];
    arr.forEach(function (item) {
      const find_result = result.find(function (sub) {
        return sub === item;
      });
      if (!find_result) {
        result.push(item);
      }
    });
    return result;
  }

  const arr = removalArr(array);
  console.log(arr);  //[1, 4, 2, 6, 3]

	//使用Set
  const arr1 = new Set(array);
  console.log([...arr1]);

  const arr2 = [...new Set(array)];
  console.log(arr2);

```