let array_item = [1, 2, 3, 4, 5, 6, 7];
function Median(ls) {
  let sortingLs = ls.sort(function (a, b) {
    return a - b;
  });

  if (ls.length % 2 === 0) {
    const n = (sortingLs.length - 2) / 2;
    let new_array = [];
    for (let i = 1; i <= n; i++) {
      delete sortingLs[sortingLs.length - i];
    }
    for (let i = 0; i < n; i++) {
      delete sortingLs[i];
    }
    for (let i = 0; i < sortingLs.length; i++) {
      if (sortingLs[i] != undefined) {
        new_array.push(sortingLs[i]);
      }
    }

    return new_array;
  }

  if (ls.length % 2 === 1) {
    const n = (sortingLs.length - 1) / 2;
    let new_array = [];
    for (let i = 1; i <= n; i++) {
      delete sortingLs[sortingLs.length - i];
    }
    for (let i = 0; i < n; i++) {
      delete sortingLs[i];
    }
    for (let i = 0; i < sortingLs.length; i++) {
      if (sortingLs[i] != undefined) {
        new_array.push(sortingLs[i]);
      }
    }

    return new_array;
  }
}
let hasilFunction = Median(array_item);
console.log(hasilFunction);
